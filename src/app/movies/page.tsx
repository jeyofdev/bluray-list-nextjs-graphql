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
import {
	MovieDetails,
	MovieResponse,
	useMoviesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import useSearch from '@hooks/useSearch';
import useToast from '@hooks/useToast';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { FiltersType, SupportType } from '../../types';

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

	const [filters, setFilters] = useState<FiltersType>({
		genres: {},
		years: [],
	});

	const [movies, setMovies] = useState<MovieResponse[]>(
		data?.movies as MovieResponse[],
	);

	const [moviesFiltered, setMoviesFiltered] = useState<MovieResponse[]>(
		data?.movies as MovieResponse[],
	);

	const getGenresByMovies = useCallback(() => {
		const genreByMovie = movies
			?.map(movie =>
				movie?.details?.genres?.map(genre => genre?.name)?.join(','),
			)
			.join(',')
			.split(',');

		return Array.from(new Set(genreByMovie));
	}, [movies]);

	const getYearByMovie = useCallback(() => {
		const years = movies.map(
			m => m?.details?.release_date?.slice(0, 4) as string,
		);

		return Array.from(new Set(years));
	}, [movies]);

	useEffect(() => {
		const genres = getGenresByMovies().reduce(
			(accumulator, currentValue) => ({
				...accumulator,
				[currentValue]: false,
			}),
			{},
		);

		const years = getYearByMovie().reduce(
			(accumulator, currentValue) => ({
				...accumulator,
				[currentValue]: false,
			}),
			{},
		);

		setFilters({ genres, years });
	}, [getGenresByMovies, getYearByMovie, movies]);

	useEffect(() => {
		const genreFilterIsOk = Object.values(filters?.genres).some(
			item => item === true,
		);

		if (genreFilterIsOk) {
			const genreFilters = Object.keys(filters?.genres).filter(
				genre => filters?.genres[genre as keyof typeof filters.genres] === true,
			);

			const movieFilterByGenre = movies?.filter(m => {
				const movieGenres = m?.details?.genres?.map(genre => genre?.name);
				return movieGenres?.some(v => genreFilters.includes(v as string));
			});

			setMoviesFiltered(movieFilterByGenre);
		} else {
			setMoviesFiltered(movies);
		}
	}, [filters, movies]);

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
								totalResults={movies?.length as number}
								severity='info'
							/>

							{movies?.length ? (
								<FilterSettings
									title='Filters'
									genresLabel={getGenresByMovies()}
									yearsLabel={getYearByMovie().sort(
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
