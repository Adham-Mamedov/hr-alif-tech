import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () => import('../views/Employees'),
  },
  {
    path: '/employee/:id',
    name: 'EmployeeDetails',
    component: () => import('../views/EmployeeDetails')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})

export default router
