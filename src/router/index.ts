import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('/@/pages/Home.vue')
const Bookmark = () => import('/@/pages/Bookmark.vue')
const Search = () => import('/@/pages/Search.vue')
const Add = () => import('/@/pages/Add.vue')
const Entry = () => import('/@/pages/Entry.vue')

const routes = [
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
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
