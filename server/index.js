import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Koa from 'koa'
import koaConnect from 'koa-connect'

export async function createServer (root = process.cwd(), isProd = process.env.NODE_ENV === 'production', hmrPort) {
	const __dirname = path.dirname(fileURLToPath(import.meta.url))
	const resolve = (p) => path.resolve(__dirname, p)
	const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : ''
	const manifest = isProd ? JSON.parse(fs.readFileSync(resolve('dist/client/ssr-manifest.json'), 'utf-8')) : {}
	const app = new Koa()

	/**
	 * @type {import('vite').ViteDevServer}
	 */
	let viteServer
	if (!isProd) {
		// 以中间件模式创建 Vite 应用，并将 appType 配置为 'custom'
		// 这将禁用 Vite 自身的 HTML 服务逻辑
		// 并让上级服务器接管控制
		viteServer = await (
			await import('vite')
		).createServer({
			root,
			logLevel: 'error',
			server: {
				middlewareMode: true,
				watch: {
					usePolling: true,
					interval: 100
				},
				hmr: {
					port: hmrPort
				}
			},
			appType: 'custom'
		})
		// use vite's connect instance as middleware
		app.use(koaConnect(viteServer.middlewares))
	} else {
		app.use((await import('compression')).default())
		app.use(
			'/',
			(await import('serve-static')).default(resolve('dist/client'), {
				index: false
			})
		)
	}

	app.use(async (ctx) => {
		try {
			const url = ctx.originalUrl

			let template, render
			if (!isProd) {
				template = fs.readFileSync(resolve('../index.html'), 'utf-8')
				template = await viteServer.transformIndexHtml(url, template)
				render = (await viteServer.ssrLoadModule('/server/entry-server.js')).render
			} else {
				template = indexProd
				render = (await import('./dist/server/entry-server.js')).render
			}

			const [appHtml, preloadLinks] = await render(url, manifest)

			const html = template.replace('<!--preload-links-->', preloadLinks).replace('<!--app-html-->', appHtml)

			ctx.type = 'text/html'
			ctx.body = html
		} catch (e) {
			viteServer && viteServer.ssrFixStacktrace(e)
			console.log(e.stack)
			ctx.throw(500, e.stack)
		}
	})

	return { app, viteServer }
}

createServer().then(({ app }) =>
	app.listen(5000, () => {
		console.log('App is ready on: http://localhost:5000')
	})
)
