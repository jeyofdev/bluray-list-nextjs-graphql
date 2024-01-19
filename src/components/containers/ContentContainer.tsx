'use client';

import { Paper } from '@mui/material';
import { ChildrenType } from '../../types';

type ContentContainerType = {
	children?: ChildrenType;
};

const ContentContainer = ({ children }: ContentContainerType) => {
	return (
		<Paper elevation={0} className='rounded-md p-4 md:p-5 lg:p-6 xl:p-8'>
			{children}
		</Paper>
	);
};

export default ContentContainer;
