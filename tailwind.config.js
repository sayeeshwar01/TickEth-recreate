/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'sample' : '0 0 10px 0 rgba(0, 0, 0, 10)'
      },
      dropShadow: {
        '3xl': '0 20px 20px rgba(0, 0, 0, 10)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }, 
      colors:{
        'myOrange' : '#F54848;',
        'blackbg' : 'rgba(0,0,0,.7)'
      }, 
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
