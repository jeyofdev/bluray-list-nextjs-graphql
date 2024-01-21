import { createTheme } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../../tailwind.config';

const tailwindConfig = resolveConfig(tailwindConfigModule) as any;

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: Number(tailwindConfig.theme.screens.sm.slice(0, -2)),
			md: Number(tailwindConfig.theme.screens.md.slice(0, -2)),
			lg: Number(tailwindConfig.theme.screens.lg.slice(0, -2)),
			xl: Number(tailwindConfig.theme.screens.xl.slice(0, -2)),
		},
	},
});

const globalTheme = createTheme({
	...theme,
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					paddingLeft: '1rem',
					paddingRight: '1rem',

					[theme.breakpoints.up('sm')]: {
						paddingLeft: '1.5rem',
						paddingRight: '1.5rem',
					},

					[theme.breakpoints.up('md')]: {
						paddingLeft: '1.75rem',
						paddingRight: '1.75rem',
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					minWidth: 'auto',
					minHeight: 'auto',
				},
			},
		},
		MuiAlert: {
			styleOverrides: {
				root: {
					padding: '1rem',
				},
				message: {
					padding: 0,
				},
				icon: {
					padding: 0,
					alignItems: 'center',
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					paddingLeft: '0.25rem',
					paddingRight: '0.25rem',
				},
			},
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					minWidth: 'auto',
					minHeight: 'auto',
				},
			},
		},
	},
});

export const darkTheme = createTheme({
	...globalTheme,
	palette: {
		mode: 'light',
		common: {
			black: tailwindConfig.theme.colors.slate['900'],
			white: tailwindConfig.theme.colors.slate['50'],
		},
		primary: {
			light: tailwindConfig.theme.colors.sky['400'],
			main: tailwindConfig.theme.colors.sky['600'],
			dark: tailwindConfig.theme.colors.sky['800'],
			contrastText: tailwindConfig.theme.colors.sky['50'],
		},
		secondary: {
			light: tailwindConfig.theme.colors.blue['700'],
			main: tailwindConfig.theme.colors.blue['900'],
			dark: tailwindConfig.theme.colors.blue['800'],
			contrastText: tailwindConfig.theme.colors.blue['50'],
		},
		error: {
			light: tailwindConfig.theme.colors.red['400'],
			main: tailwindConfig.theme.colors.red['600'],
			dark: tailwindConfig.theme.colors.red['800'],
			contrastText: tailwindConfig.theme.colors.red['50'],
		},
		warning: {
			light: tailwindConfig.theme.colors.amber['300'],
			main: tailwindConfig.theme.colors.amber['500'],
			dark: tailwindConfig.theme.colors.amber['600'],
			contrastText: tailwindConfig.theme.colors.amber['50'],
		},
		info: {
			light: tailwindConfig.theme.colors.sky['300'],
			main: tailwindConfig.theme.colors.sky['400'],
			dark: tailwindConfig.theme.colors.sky['600'],
			contrastText: tailwindConfig.theme.colors.sky['50'],
		},
		success: {
			light: tailwindConfig.theme.colors.green['400'],
			main: tailwindConfig.theme.colors.green['500'],
			dark: tailwindConfig.theme.colors.green['600'],
			contrastText: tailwindConfig.theme.colors.green['50'],
		},
		grey: {
			50: tailwindConfig.theme.colors.gray['50'],
			100: tailwindConfig.theme.colors.gray['100'],
			200: tailwindConfig.theme.colors.gray['200'],
			300: tailwindConfig.theme.colors.gray['300'],
			400: tailwindConfig.theme.colors.gray['400'],
			500: tailwindConfig.theme.colors.gray['500'],
			600: tailwindConfig.theme.colors.gray['600'],
			700: tailwindConfig.theme.colors.gray['700'],
			800: tailwindConfig.theme.colors.gray['800'],
			900: tailwindConfig.theme.colors.gray['900'],
		},
		background: {
			paper: tailwindConfig.theme.colors.slate['100'],
			default: tailwindConfig.theme.colors.slate['50'],
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.6)',
			disabled: 'rgba(0, 0, 0, 0.38)',
		},
		divider: 'rgba(0,0,0,0.12)',
		action: {
			active: 'rgba(0, 0, 0, 0.54)',
			hover: 'rgba(0, 0, 0, 0.04)',
			hoverOpacity: 0.04,
			selected: 'rgba(0, 0, 0, 0.08)',
			selectedOpacity: 0.08,
			disabled: 'rgba(0, 0, 0, 0.26)',
			disabledBackground: 'rgba(0, 0, 0, 0.12)',
			disabledOpacity: 0.38,
			focus: 'rgba(0, 0, 0, 0.12)',
			focusOpacity: 0.12,
			activatedOpacity: 0.12,
		},
	},
	shape: {
		borderRadius: 5,
	},
	mixins: {
		toolbar: {
			minHeight: 'auto',
			'@media (min-width:0px)': {
				'@media (orientation: landscape)': {
					minHeight: 'auto',
				},

				'@media (min-width:600px)': {
					minHeight: 'auto',
				},
			},
		},
	},
	typography: {
		htmlFontSize: Number(tailwindConfig.theme.fontSize.base[0].slice(0, -2)),
		fontFamily: tailwindConfig.theme.fontFamily.sans,
		fontSize: Number(tailwindConfig.theme.fontSize.sm[0].slice(0, -2)),
		fontWeightLight: tailwindConfig.theme.fontWeight.light,
		fontWeightRegular: tailwindConfig.theme.fontWeight.normal,
		fontWeightMedium: tailwindConfig.theme.fontWeight.medium,
		fontWeightBold: tailwindConfig.theme.fontWeight.bold,

		h1: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.light,
			fontSize: tailwindConfig.theme.fontSize['h1'],
			lineHeight: tailwindConfig.theme.lineHeight['h1'],
			letterSpacing: tailwindConfig.theme.letterSpacing['h1'],
		},

		h2: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.light,
			fontSize: tailwindConfig.theme.fontSize['h2'],
			lineHeight: tailwindConfig.theme.lineHeight['h2'],
			letterSpacing: tailwindConfig.theme.letterSpacing['h2'],
		},

		h3: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.normal,
			fontSize: tailwindConfig.theme.fontSize['h3'],
			lineHeight: tailwindConfig.theme.lineHeight['h3'],
			letterSpacing: tailwindConfig.theme.letterSpacing['h3'],
		},

		h4: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.bold,
			fontSize: tailwindConfig.theme.fontSize['h4'],
			lineHeight: tailwindConfig.theme.lineHeight['h4'],
			letterSpacing: tailwindConfig.theme.letterSpacing['h4'],

			[theme.breakpoints.up('md')]: {
				fontSize: tailwindConfig.theme.fontSize['5xl'],
			},
		},

		h5: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.normal,
			fontSize: tailwindConfig.theme.fontSize['h5'],
			lineHeight: tailwindConfig.theme.lineHeight['h5'],
			letterSpacing: tailwindConfig.theme.letterSpacing['h5'],
		},

		h6: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.medium,
			fontSize: tailwindConfig.theme.fontSize['h6'],
			lineHeight: tailwindConfig.theme.lineHeight['h6'],
			letterSpacing: tailwindConfig.theme.letterSpacing['h6'],
		},

		subtitle1: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.normal,
			fontSize: tailwindConfig.theme.fontSize.base[0],
			lineHeight: tailwindConfig.theme.lineHeight['subtitle1'],
			letterSpacing: tailwindConfig.theme.letterSpacing['subtitle1'],
		},

		subtitle2: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.medium,
			fontSize: tailwindConfig.theme.fontSize.sm[0],
			lineHeight: tailwindConfig.theme.lineHeight['subtitle2'],
			letterSpacing: tailwindConfig.theme.letterSpacing['subtitle2'],
		},

		body1: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.normal,
			fontSize: tailwindConfig.theme.fontSize.base[0],
			lineHeight: tailwindConfig.theme.lineHeight['body1'],
			letterSpacing: tailwindConfig.theme.letterSpacing['body1'],
		},

		body2: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.normal,
			fontSize: tailwindConfig.theme.fontSize.sm[0],
			lineHeight: tailwindConfig.theme.lineHeight['body2'],
			letterSpacing: tailwindConfig.theme.letterSpacing['body2'],
		},

		button: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.medium,
			fontSize: tailwindConfig.theme.fontSize.sm[0],
			lineHeight: tailwindConfig.theme.lineHeight.button,
			letterSpacing: tailwindConfig.theme.letterSpacing.button,
			textTransform: 'uppercase',
		},

		caption: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.normal,
			fontSize: tailwindConfig.theme.fontSize.xs[0],
			lineHeight: tailwindConfig.theme.lineHeight.caption,
			letterSpacing: tailwindConfig.theme.letterSpacing.caption,
		},
		overline: {
			fontFamily: tailwindConfig.theme.fontFamily.sans,
			fontWeight: tailwindConfig.theme.fontWeight.normal,
			fontSize: tailwindConfig.theme.fontSize.xs[0],
			lineHeight: tailwindConfig.theme.lineHeight.overline,
			letterSpacing: tailwindConfig.theme.letterSpacing.overline,
			textTransform: 'uppercase',
		},
	},
});
