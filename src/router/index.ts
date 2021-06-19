import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import apis from '../lib/apis'
import { redirect2AuthEndpoint } from '/@/use/api'
import { useStore } from '/@/store'

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
      // ログイン済みかどうか調べる
      const store = useStore()
      if (!store.state.me){
        try {
          await store.dispatch.fetchMe()
        } catch(e) {
          console.error(e)
        }
      }
      if (!store.state.me) {
        sessionStorage.setItem('destination', to.fullPath)
        redirect2AuthEndpoint()
      }
      next()
    }
  },
  {
    path: '/bookmark',
    name: 'Bookmark', 
    component: Bookmark,
    beforeEnter: async (to, _, next) => {
      // ログイン済みかどうか調べる
      const store = useStore()
      if (!store.state.me){
        try {
          await store.dispatch.fetchMe()
        } catch(e) {
          console.error(e)
        }
      }
      if (!store.state.me) {
        sessionStorage.setItem('destination', to.fullPath)
        redirect2AuthEndpoint()
      }
      next()
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    beforeEnter: async (to, _, next) => {
      // ログイン済みかどうか調べる
      const store = useStore()
      if (!store.state.me){
        try {
          await store.dispatch.fetchMe()
        } catch(e) {
          console.error(e)
        }
      }
      if (!store.state.me) {
        sessionStorage.setItem('destination', to.fullPath)
        redirect2AuthEndpoint()
      }
      next()
    }
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    beforeEnter: async (to, _, next) => {
      // ログイン済みかどうか調べる
      const store = useStore()
      if (!store.state.me){
        try {
          await store.dispatch.fetchMe()
        } catch(e) {
          console.error(e)
        }
      }
      if (!store.state.me) {
        sessionStorage.setItem('destination', to.fullPath)
        redirect2AuthEndpoint()
      }
      next()
    }
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry,
    beforeEnter: async (to, _, next) => {
      // ログイン済みかどうか調べる
      const store = useStore()
      if (!store.state.me){
        try {
          await store.dispatch.fetchMe()
        } catch(e) {
          console.error(e)
        }
      }
      if (!store.state.me) {
        sessionStorage.setItem('destination', to.fullPath)
        redirect2AuthEndpoint()
      }
      next()
    }
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
