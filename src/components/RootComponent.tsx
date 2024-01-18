'use client';

import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { darkTheme } from '@theme/globalTheme';
import { ChildrenType } from '../types';

type RootComponentPropsType = {
	children: ChildrenType;
};

const RootComponent = ({ children }: RootComponentPropsType) => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default RootComponent;
