import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/countries', component: () => import('../views/Countries/CountriesSummary.vue') },
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
