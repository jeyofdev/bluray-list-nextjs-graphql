'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import MainSwiper from '@components/ui/swiper/MainSwiper';
import {
	MovieResponse,
	useMoviesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { Typography } from '@mui/material';
import { Suspense } from 'react';

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

				<Suspense fallback={<h1>load</h1>}>
					<MainSwiper list={data?.movies as MovieResponse[]} />
				</Suspense>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default HomePage;
