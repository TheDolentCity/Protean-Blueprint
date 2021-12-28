const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.svelte',
    './src/app.html'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Newsreader', 'serif'],
      mono: ['Fira Code', 'mono'],
    },
    extend: {
      colors: {
        'base': colors.zinc,
        'accent': colors.sky
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
