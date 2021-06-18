import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    textColor: theme => ({
      ...theme('colors'),
      accent: '#0BB870'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#E5F6EF',
      accent: '#0BB870'
    }),
    fontFamily: {
      sans: ['Open Sans', 'Noto Sans JP', 'sans-serif']
    },
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
  ],
})