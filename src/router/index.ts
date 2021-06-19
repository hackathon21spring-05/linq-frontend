import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import apis from '../lib/apis'

const Home = () => import('/@/pages/Home.vue')
const Bookmark = () => import('/@/pages/Bookmark.vue')
const Search = () => import('/@/pages/Search.vue')
const Add = () => import('/@/pages/Add.vue')
const Entry = () => import('/@/pages/Entry.vue')
const NotFound = () => import('/@/pages/NotFound.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home', 
    component: Home
  },
  {
    path: '/bookmark',
    name: 'Bookmark', 
    component: Bookmark
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Home,
    beforeEnter: async (to, _, next) => {
      await apis.callback(String(to.query.code))
      const destination = sessionStorage.getItem('destination')
      if (destination) next(destination)
      else next('/')
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
