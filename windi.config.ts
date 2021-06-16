import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#E5F6EF'
    }),
    fontFamily: {
      sans: ['Open Sans', 'Noto Sans JP', 'sans-serif']
    },
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
  ],
})