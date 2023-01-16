/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#be123c',
        dark: '#0f172a',
        secondary: '#64748b'
      },

      // screens:{
      //   '2xl' : '1320px',
      // }
    },
  },
  plugins: [],
}
