import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    borderColor: theme => ({
      ...theme('colors'),
      accent: '#0BB870',
      accent2: '#8CBEAA'
    }),
    textColor: theme => ({
      ...theme('colors'),
      accent: '#0BB870',
      primary: '#111312',
      secondary: '#414946'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#E5F6EF',
      accent: '#0BB870',
      accent2: '#8CBEAA'
    }),
    fontFamily: {
      sans: ['Open Sans', 'Noto Sans JP', 'sans-serif']
    },
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
  ],
})