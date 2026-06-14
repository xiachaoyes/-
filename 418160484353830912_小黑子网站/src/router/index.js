import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Memes from '@/pages/Memes.vue'
import Talents from '@/pages/Talents.vue'
import About from '@/pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/memes', component: Memes },
  { path: '/talents', component: Talents },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
