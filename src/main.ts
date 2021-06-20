import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import './index.css'
import 'virtual:windi.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(lazyPlugin, {
  error: './assets/no.svg'
})
app.mount('#app')
