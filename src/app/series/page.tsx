'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { Typography, useTheme } from '@mui/material';

const SeriesPage = () => {
	const theme = useTheme();

	return (
		<ContentContainer>
			<Typography variant='h4' component='h1' className='text-center'>
				Series
			</Typography>
		</ContentContainer>
	);
};

export default SeriesPage;
