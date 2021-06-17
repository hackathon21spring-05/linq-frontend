import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { PluginTrapAuth } from '@traptitech/vite-plugin-trap-auth'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '/@': srcPath
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://linq-test.trap.games',
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    PluginTrapAuth()
  ]
})
