/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {},
		colors: {
			body: 'hsl(227deg 17% 15%)',
			text: 'hsl(227deg 17% 85%)',
			textMuted: 'hsl(227deg 17% 73%)',
			accent: 'hsl(11deg 89% 58%)'
		}
	},
	plugins: []
};
