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
		MuiButton: {
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
			light: tailwindConfig.theme.colors.purple['400'],
			main: tailwindConfig.theme.colors.purple['600'],
			dark: tailwindConfig.theme.colors.purple['800'],
			contrastText: tailwindConfig.theme.colors.purple['50'],
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
			light: tailwindConfig.theme.colors.green['300'],
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
			paper: tailwindConfig.theme.colors.slate['50'],
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
});
