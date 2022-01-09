const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.svelte',
		'./src/app.html'
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['IBM Plex Sans', 'sans-serif'],
			serif: ['Newsreader', 'serif'],
			mono: ['IBM Plex Mono', 'mono'],
		},
		extend: {
			colors: {
				'base': {
					'50': '#f8fafc',
					'100': '#f1f5f9',
					'200': '#e2e8f0',
					'300': '#cbd5e1',
					'400': '#94a3b8',
					'500': '#64748b',
					'600': '#475569',
					'700': '#334155',
					'800': '#1e293b',
					'900': '#0f172a',
					'1000': '#0a1125',
				},
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
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
}
