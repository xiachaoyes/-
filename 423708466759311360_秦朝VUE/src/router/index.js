import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/pages/Home.vue') },
  { path: '/emperor', name: 'Emperor', component: () => import('@/pages/Emperor.vue') },
  { path: '/unification', name: 'Unification', component: () => import('@/pages/Unification.vue') },
  { path: '/system', name: 'System', component: () => import('@/pages/System.vue') },
  { path: '/culture', name: 'Culture', component: () => import('@/pages/Culture.vue') },
  { path: '/engineering', name: 'Engineering', component: () => import('@/pages/Engineering.vue') },
  { path: '/fall', name: 'Fall', component: () => import('@/pages/Fall.vue') },
  { path: '/legacy', name: 'Legacy', component: () => import('@/pages/Legacy.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
