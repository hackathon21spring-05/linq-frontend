import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('/@/pages/Home.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
