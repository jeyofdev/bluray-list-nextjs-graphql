'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import { Typography } from '@mui/material';

const SeriesPage = () => {
	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Series
				</Typography>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default SeriesPage;
