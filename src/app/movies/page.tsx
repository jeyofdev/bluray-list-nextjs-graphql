'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import MovieCard from '@components/cards/MovieCard';
import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import ItemsList from '@components/ui/list/ItemList';
import FilterSettings from '@components/ui/menu/FilterSettings';
import SearchMovieModal from '@components/ui/modal/SearchMovieModal';
import ShowResultsNumber from '@components/ui/result/ShowResultNumber';
import Toast from '@components/ui/toast/Toast';
import { TypeEnum } from '@enums/index';
import {
	MovieDetails,
	MovieResponse,
	useMoviesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import useFilter from '@hooks/useFilter';
import useSearch from '@hooks/useSearch';
import useToast from '@hooks/useToast';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { SupportType } from '../../types';

const MoviesPage = () => {
	const router = useRouter();

	const { showSearchModal, onOpenSearchModal, onCloseSearchModal } =
		useSearch();

	const {
		toast,
		onOpen: handleOpenToast,
		onClose: handleCloseToast,
	} = useToast();

	const { data, refetch } = useMoviesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	const {
		filters,
		setFilters,
		itemsFiltered: moviesFiltered,
		getGenresByItems,
		getYearByItem,
	} = useFilter(data?.movies as MovieResponse[], TypeEnum.MOVIE);

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Movies
				</Typography>

				<Suspense fallback={<h1>load</h1>}>
					<>
						<Box className='flex justify-between'>
							<ShowResultsNumber
								totalResults={moviesFiltered?.length as number}
								severity='info'
							/>

							{moviesFiltered?.length ? (
								<FilterSettings
									title='Filters'
									genresLabel={getGenresByItems()}
									yearsLabel={getYearByItem().sort(
										(a: string, b: string) => Number(a) - Number(b),
									)}
									filters={filters}
									setFilters={setFilters}
								/>
							) : null}
						</Box>

						<ItemsList
							items={moviesFiltered}
							renderItems={(movie: MovieResponse) => (
								<MovieCard
									key={movie.id}
									id={movie.id as string}
									movie={movie.details as MovieDetails}
									supports={movie.support as SupportType | undefined}
									onClick={() => router.push(`/movies/${movie?.id}`)}
									refetch={refetch}
									toast={{
										onOpen: handleOpenToast,
										onClose: handleCloseToast,
									}}
								/>
							)}
						/>
					</>
				</Suspense>

				<Box className='mt-4 flex justify-center'>
					<ButtonAction
						icon={<AddIcon className='size-6' />}
						onClick={onOpenSearchModal}
					/>
				</Box>
			</ContentContainer>

			<SearchMovieModal
				open={showSearchModal}
				onClose={onCloseSearchModal}
				refetch={refetch}
			/>

			<Toast
				open={toast.open}
				onClose={handleCloseToast}
				message={toast.message}
			/>
		</NoSSRWrapper>
	);
};

export default MoviesPage;
