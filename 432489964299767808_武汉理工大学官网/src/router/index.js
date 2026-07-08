import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/pages/Home.vue') },
  { path: '/about', name: 'About', component: () => import('@/pages/About.vue') },
  { path: '/departments', name: 'Departments', component: () => import('@/pages/Departments.vue') },
  { path: '/departments/:id', name: 'DepartmentDetail', component: () => import('@/pages/DepartmentDetail.vue') },
  { path: '/admission', name: 'Admission', component: () => import('@/pages/Admission.vue') },
  { path: '/research', name: 'Research', component: () => import('@/pages/Research.vue') },
  { path: '/culture', name: 'Culture', component: () => import('@/pages/Culture.vue') },
  { path: '/gallery', name: 'Gallery', component: () => import('@/pages/Gallery.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
