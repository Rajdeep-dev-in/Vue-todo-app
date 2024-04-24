import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import AddTodo from '@/views/AddTodo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/add-task',
      name: 'add-task',
      component: AddTodo
    }
  ]
})

export default router
