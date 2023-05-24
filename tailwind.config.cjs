/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				// '-2xl': { max: '1439px' },
				'-xl': { max: '1279px' },
				'-lg': { max: '1023px' },
				'-md': { max: '767px' },
				'-sm': { max: '639px' }
			},
			colors: {
				"dark-cyan": "hsl(185, 75%, 39%)",
				"very-dark-blue": "hsl(229, 23%, 23%)",
				"dark-grayish-blue": "hsl(227, 10%, 46%)",
				"dark-gray": "hsl(0, 0%, 59%)",
			},
			fontFamily: {
				"kumbh-sans": "Kumbh Sans",
			}
		}
	},
	plugins: []
};
