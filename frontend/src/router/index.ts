import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { type IStaticMethods } from 'preline/preline'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/LibraSys.vue'),
        meta: {
          title: 'Dashboard'
        }
      }
    ]
  }
]

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit()
    }, 100)
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Library Management System`
  next()
})

export default router
