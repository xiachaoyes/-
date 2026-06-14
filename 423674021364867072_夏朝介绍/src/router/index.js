import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Establish from '@/pages/Establish.vue'
import Politics from '@/pages/Politics.vue'
import Economy from '@/pages/Economy.vue'
import Fall from '@/pages/Fall.vue'
import Significance from '@/pages/Significance.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/establish', name: 'Establish', component: Establish },
  { path: '/politics', name: 'Politics', component: Politics },
  { path: '/economy', name: 'Economy', component: Economy },
  { path: '/fall', name: 'Fall', component: Fall },
  { path: '/significance', name: 'Significance', component: Significance }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
