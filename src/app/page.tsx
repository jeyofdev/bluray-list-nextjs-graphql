'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { Typography } from '@mui/material';

const HomePage = () => {
	return (
		<ContentContainer>
			<Typography
				variant='h4'
				className='text-center text-5xl font-bold md:text-6xl'
			>
				Home
			</Typography>
		</ContentContainer>
	);
};

export default HomePage;
