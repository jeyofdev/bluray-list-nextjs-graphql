'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { Typography } from '@mui/material';

const SeriesPage = () => {
	return (
		<ContentContainer>
			<Typography
				variant='h4'
				className='text-center text-5xl font-bold md:text-6xl'
			>
				Series
			</Typography>
		</ContentContainer>
	);
};

export default SeriesPage;
