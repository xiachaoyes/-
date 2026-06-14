import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Events from '@/pages/Events.vue'
import Figures from '@/pages/Figures.vue'
import Culture from '@/pages/Culture.vue'
import Politics from '@/pages/Politics.vue'
import Economy from '@/pages/Economy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/events', name: 'Events', component: Events },
  { path: '/figures', name: 'Figures', component: Figures },
  { path: '/culture', name: 'Culture', component: Culture },
  { path: '/politics', name: 'Politics', component: Politics },
  { path: '/economy', name: 'Economy', component: Economy }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
