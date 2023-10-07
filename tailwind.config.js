/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{ejs,js}', './src/**/*.{ejs,js}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        'testimonials-desktop': [
          'test1 test1 test2 test3',
          'test4 test5 test5 test3',
        ],
        'testimonials-tablet': [
          'test1 test2',
          'test4 test3',
        ],
        'testimonials-phone': [
          'test1',
          'test2',
          'test3',
        ],
      },
      gridTemplateColumns: {
        'testimonials-desktop': [
          '1fr 1fr 1fr 1fr',
        ],
        'testimonials-tablet': [
          '1fr 1fr',
        ],
        'testimonials-phone': [
          '1fr',
        ],
      },
      gridTemplateRows: {
        'testimonials-desktop': [
          '1fr 1fr',
        ],
        'testimonials-tablet': [
          '1fr 1fr',
        ],
        'testimonials-phone': [
          '1fr 1fr 1fr',
        ],
      },
      margin:{
        'global': '5%'
      },
      padding:{
        'global': '5%',
      },
      colors:{
      },
      fontFamily: {
        'general': ['General Sans', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'chillax': ['Chillax', 'sans-serif'] ,
      }, 
      colors: {
        'light-blue': '#a5b4d1'
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ]
}