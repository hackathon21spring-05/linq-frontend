import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

const srcPath = path.resolve(__dirname, 'src').replace(/\\/g, '/')

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '/@': srcPath
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://linq.trap.games/',
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    VitePWA({
      manifest: {
        lang: 'ja',
        name: 'linQ',
        short_name: 'linQ',
        background_color: '#E5F6EF',
        theme_color: '#0BB870',
        icons: [
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
