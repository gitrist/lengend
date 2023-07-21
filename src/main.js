import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'

import App from './App.vue'
import { createRouter } from './router'
// import "@/router/permission"
// load
// import { loadSvg } from "@/icons"
// import { loadPlugins } from "@/plugins"
// import { loadDirectives } from "@/directives"
// css
import './tailwind.css'

// loadPlugins(app)
// loadSvg(app)
// loadDirectives(app)

export function createApp () {
	const app = createSSRApp(App)
	const pinia = createPinia()
	app.use(pinia)
	const router = createRouter()
	app.use(router)
	return { app, router }
}
