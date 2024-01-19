'use client';

import { Box, Container } from '@mui/material';
import { ChildrenType } from '../../types';

type MainContainerType = {
	children: ChildrenType;
};

const MainContainer = ({ children }: MainContainerType) => {
	return (
		<Box className='relative'>
			<Box className='min-h-[150px] w-full bg-primary-300' />
			<Container
				maxWidth='lg'
				classes={{
					root: 'absolute left-1/2 top-[75%] sm:top-[70%] md:top-[70%] lg:top-[65%] xl:top-[55%] -translate-x-1/2',
				}}
			>
				{children}
			</Container>
		</Box>
	);
};

export default MainContainer;
