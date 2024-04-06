import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Index.vue'),
      meta: {
        layout: 'user-layout'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue'),
      meta: {
        layout: 'user-layout'
      }
    }
  ]
})

export default router;
