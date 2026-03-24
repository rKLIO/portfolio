import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import CurriculumView from '../views/CurriculumView.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/cv', name: 'cv', component: CurriculumView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Force le retour en haut de l'écran à chaque changement de page
    return { top: 0 }
  }
})

export default router