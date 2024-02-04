'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

const PageNotFound = () => {
	return (
		<Box className='flex min-h-[95vh] flex-col items-center justify-center'>
			<Image
				src='/not-found.svg'
				alt='Picture'
				width={500}
				height={500}
				className='w-full max-w-[400px] md:max-w-[500px]'
			/>
		</Box>
	);
};

export default PageNotFound;
