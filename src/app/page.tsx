'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import SwiperWithTitleSection from '@components/swipers/SwiperWithTitleSection';
import { useMoviesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import { Typography } from '@mui/material';

const HomePage = () => {
	const { data, refetch } = useMoviesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Home
				</Typography>

				<SwiperWithTitleSection
					title='Latest movies added'
					buttonHref={'/movies'}
					buttonLabel='View all'
					data={data}
					refetch={refetch}
				/>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default HomePage;
