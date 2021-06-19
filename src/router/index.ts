import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import apis from '../lib/apis'
import { redirect2AuthEndpoint } from '/@/use/api'

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
    component: Home,
    beforeEnter: async (to, _, next) => {
      let me = sessionStorage.getItem('me')
      // ログイン済みかどうか調べる
      if (!me) {
        try {
          const res = await apis.getMe()
          me = String(res.data.name)
        } catch(e) {
          console.error(e)
        }
      }
      if (!me) {
        sessionStorage.setItem('destination', to.fullPath)
        redirect2AuthEndpoint()
      }
      next()
    }
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
      try {
        const res = await apis.getMe()
        if (res.status == 200) {
          next('/')
          return
        }
      } catch(e) {
        console.error(e);
      }
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
