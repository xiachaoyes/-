import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import Features from '@/pages/Features.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import MarketShare from '@/pages/MarketShare.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/features', name: 'Features', component: Features },
  { path: '/news', name: 'News', component: News },
  { path: '/about', name: 'About', component: About },
  { path: '/market-share', name: 'MarketShare', component: MarketShare }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
