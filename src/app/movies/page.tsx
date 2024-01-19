'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { Typography } from '@mui/material';

const MoviesPage = () => {
	return (
		<ContentContainer>
			<Typography variant='h4' component='h1' className='text-center'>
				Movies
			</Typography>
		</ContentContainer>
	);
};

export default MoviesPage;
