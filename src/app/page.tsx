'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import SwiperWithTitleSection from '@components/swipers/SwiperWithTitleSection';
import { TypeEnum } from '@enums/index';
import {
	useMoviesSuspenseQuery,
	useSeriesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
	const { data: dataMovies, refetch: refetchMovies } = useMoviesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	const { data: dataSeries, refetch: refetchSeries } = useSeriesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Home
				</Typography>

				<Box className='mb-8'>
					<SwiperWithTitleSection
						dataType={TypeEnum.MOVIE}
						title='Latest movies added'
						buttonHref={'/movies'}
						buttonLabel='View all'
						data={dataMovies}
						refetch={refetchMovies}
					/>
				</Box>

				<Box>
					<SwiperWithTitleSection
						dataType={TypeEnum.SERIE}
						title='Latest series added'
						buttonHref={'/series'}
						buttonLabel='View all'
						data={dataSeries}
						refetch={refetchSeries}
					/>
				</Box>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default HomePage;
