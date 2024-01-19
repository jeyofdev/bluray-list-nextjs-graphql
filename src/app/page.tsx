'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { Typography } from '@mui/material';

const HomePage = () => {
	return (
		<ContentContainer>
			<Typography variant='h4' component='h1' className='text-center'>
				Home
			</Typography>
		</ContentContainer>
	);
};

export default HomePage;
