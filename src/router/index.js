import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{ path: '/countries', component: () => import('@/views/countries/CountriesSummary.vue') }]

const route = createRouter({
  history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
  routes
})
export default route
