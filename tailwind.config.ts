import type { Config } from 'tailwindcss';

const config: Config = {
	corePlugins: {
		preflight: false,
	},
	content: ['./src/app/**/*.tsx', './src/components/**/*.tsx'],
	theme: {
		screens: {
			sm: '768px',
			md: '960px',
			lg: '1380px',
			xl: '1920px',
		},

		extend: {
			colors: {
				primary: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					1000: '#020617',
				},
				danger: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fee2e2',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					1000: '#450a0a',
				},
				success: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
					1000: '#052e16',
				},
			},
		},
	},
	plugins: [],
};
export default config;
