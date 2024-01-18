'use client';

import { Box } from '@mui/material';
import { ChildrenType } from '../../types';

type ContentContainerType = {
	children?: ChildrenType;
};

const ContentContainer = ({ children }: ContentContainerType) => {
	return (
		<Box className='rounded-md bg-gray-100 p-4 md:p-5 lg:p-6 xl:p-8'>
			{children}
		</Box>
	);
};

export default ContentContainer;
