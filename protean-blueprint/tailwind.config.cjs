const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.svelte',
    './src/app.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'base': colors.stone,
      }
    },
  },
  plugins: [],
}
