import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/Countries', component: () => import('../views/Countries/CountriesSummary.vue') },
	{ path: '/Account/Login', component: () => import('../views/AccountLogin/AccountLogin.vue') },
	{ path: '/', component: () => import('../views/StoriesSearch/StoriesSearch.vue') }
]

export function createRouter() {
	return _createRouter({
		// use appropriate history implementation for server/client
		// import.meta.env.SSR is injected by Vite.
		history: import.meta.env.SSR ? createMemoryHistory('/') : createWebHistory('/'),
		routes
	})
}
