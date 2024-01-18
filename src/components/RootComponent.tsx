'use client';

import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { darkTheme } from '@theme/globalTheme';
import { ReactNode } from 'react';

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
