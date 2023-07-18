import { createApp } from 'vue'
import App from './App.vue'
// import store from "@/store"
import router from '@/router'
// import "@/router/permission"
// load
// import { loadSvg } from "@/icons"
// import { loadPlugins } from "@/plugins"
// import { loadDirectives } from "@/directives"
// css
import './tailwind.css'

const app = createApp(App)

// loadPlugins(app)
// loadSvg(app)
// loadDirectives(app)

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
