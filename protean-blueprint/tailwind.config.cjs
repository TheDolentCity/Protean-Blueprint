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
        'base': colors.slate,
        'accent': colors.blue
      },
			width: {
        'screen-xs': '30rem', // 480px
        'screen-sm': '40rem', // 640px
        'screen-md': '48rem', // 768px
        'screen-lg': '64rem', // 1024px
        'screen-xl': '80rem', // 1280px
        'screen-2xl': '96rem', // 1536px
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
