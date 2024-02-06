'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import SwiperWithTitleSection from '@components/swipers/SwiperWithTitleSection';
import { SortEnum, TypeEnum } from '@enums/index';
import {
	useMoviesSuspenseQuery,
	useSeriesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import useSort from '@hooks/useSort';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

const HomePage = () => {
	const { data: dataMovies, refetch: refetchMovies } = useMoviesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	const { data: dataSeries, refetch: refetchSeries } = useSeriesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	const { setSorts: setSortsMovies, sortItems: sortItemsMovies } = useSort(
		dataMovies?.movies,
	);
	const { setSorts: setSortsSeries, sortItems: sortItemsSeries } = useSort(
		dataSeries?.series,
	);

	useEffect(() => {
		setSortsMovies({
			name: 'createdAt',
			order: SortEnum.DESC,
		});

		setSortsSeries({
			name: 'createdAt',
			order: SortEnum.DESC,
		});
	}, [setSortsMovies, setSortsSeries]);

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
						items={sortItemsMovies}
						refetch={refetchMovies}
						itemsLimit={10}
					/>
				</Box>

				<Box>
					<SwiperWithTitleSection
						dataType={TypeEnum.SERIE}
						title='Latest series added'
						buttonHref={'/series'}
						buttonLabel='View all'
						items={sortItemsSeries}
						refetch={refetchSeries}
						itemsLimit={10}
					/>
				</Box>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default HomePage;
