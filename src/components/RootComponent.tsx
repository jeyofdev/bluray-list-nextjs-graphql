'use client';

import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { darkTheme } from '../theme/globalTheme';

type RootComponentPropsType = {
	children: ReactNode;
};

const RootComponent = ({ children }: RootComponentPropsType) => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default RootComponent;
