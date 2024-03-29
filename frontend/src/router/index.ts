import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { type IStaticMethods } from 'preline/preline'

// Define the routes for the application
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        // Lazily load the Dashboard component
        component: () => import('@/views/Dashboard/LibraSys.vue'),
        // Metadata for the route
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'users',
        name: 'users-list',
        component: () => import('@/views/Users/UsersList.vue'),
        meta: {
          title: 'User List'
        }
      },
      {
        path: 'users/new',
        name: 'new-user',
        component: () => import('@/views/Users/NewUser.vue'),
        meta: {
          title: 'New User'
        }
      },
      {
        path: 'books',
        name: 'books-list',
        component: () => import('@/views/Books/BooksList.vue'),
        meta: {
          title: 'Books List'
        }
      },
      {
        path: 'books/new',
        name: 'new-book',
        component: () => import('@/views/Books/NewBook.vue'),
        meta: {
          title: 'New Book'
        }
      },
    ]
  }
]

// Extend the Window interface to include HSStaticMethods from preline/preline library
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Perform actions after each navigation
router.afterEach((to, from, failure) => {
  // Check for successful navigation
  if (!failure) {
    // Delayed execution to ensure DOM is ready
    setTimeout(() => {
      window.HSStaticMethods.autoInit() // Initialize required JavaScript for Preline UI
    }, 100)
  }
})

// Set custom title before each navigation
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Library Management System` // Set page title
  next() // Continue navigation
})

export default router // Export the router instance
