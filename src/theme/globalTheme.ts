import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
	// custom global theme
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
	},
});
