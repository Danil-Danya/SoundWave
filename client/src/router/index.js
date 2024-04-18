import { createRouter, createWebHistory } from 'vue-router';

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
    },
    {
      path: '/site/download/:lang',
      name: 'download',
      component: () => import('../views/SiteDownload.vue'),
      meta: {
        layout: 'landing'
      }
    },
    {
      path: '/site/plans/:lang',
      name: 'tarifs',
      component: () => import('../views/SiteTarifs.vue'),
      meta: {
        layout: 'landing'
      }
    },
    {
      path: '/login/:lang',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        layout: 'login'
      }
    },
    {
      path: '/registration/:lang',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
      meta: {
        layout: 'login'
      }
    }
  ]
});

export default router;
