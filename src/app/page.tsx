'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import MainSwiper from '@components/ui/swiper/MainSwiper';
import {
	MovieResponse,
	useMoviesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, Button, Divider, Typography } from '@mui/material';
import Link from 'next/link';
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

				<Box className='flex justify-between'>
					<Typography variant='h5' component='h5' className='my-0 text-xl'>
						Latest movies added
					</Typography>

					<Link href='/movies' passHref legacyBehavior>
						<Button disableRipple>
							<Typography
								variant='body1'
								component='p'
								className='my-0 text-sm text-primary-900'
							>
								View all
							</Typography>
						</Button>
					</Link>
				</Box>

				<Divider
					classes={{
						root: 'mt-2 mb-4',
					}}
				/>

				<Suspense fallback={<h1>load</h1>}>
					<MainSwiper
						list={data?.movies?.slice(0, 15) as MovieResponse[]}
						refetch={refetch}
					/>
				</Suspense>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default HomePage;
