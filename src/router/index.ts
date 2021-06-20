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
  },
  {
    path: '/bookmark',
    name: 'Bookmark', 
    component: Bookmark,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry,
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

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/callback') {
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
  }
  next()
})

export default router