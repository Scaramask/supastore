import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Wizard.vue')
      //component: () => import('../views/LoginPage.vue')
    },
     {
      path: '/:errorPath(.*)*',
      name: 'NotFound',
      component: () => import('../components/NotFoundView.vue')
    }
  ]
})

export default router
