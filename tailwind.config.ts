import type { Config } from 'tailwindcss';

const config: Config = {
	corePlugins: {
		preflight: false,
	},
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};
export default config;
