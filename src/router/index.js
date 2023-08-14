import { createRouter, createWebHistory } from 'vue-router'
import PhotoApp from '../components/PhotoApp.vue'
import PhotoView from '../components/PhotoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PhotoApp,
      children: [
        {
          path: 'albums/:id',
          component: PhotoView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
