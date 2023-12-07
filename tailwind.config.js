/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#9AD1D1',
        secondary: '#FA9191',
        dark: '#2B6565',
      },
      screens: {
        '2xl': '1320px', 
      },
    },
  },
  plugins: [],
}
