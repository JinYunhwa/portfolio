import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createWebHashHistory(), // GitHub Pages용 (hash 기반)
  routes,
})

export default router
