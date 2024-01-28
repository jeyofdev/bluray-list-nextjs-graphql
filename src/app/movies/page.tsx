'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import MovieCard from '@components/cards/MovieCard';
import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import ItemsList from '@components/ui/list/ItemList';
import SearchMovieModal from '@components/ui/modal/SearchMovieModal';
import ShowResultsNumber from '@components/ui/result/ShowResultNumber';
import Toast from '@components/ui/toast/Toast';
import { useMoviesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import useSearch from '@hooks/useSearch';
import useToast from '@hooks/useToast';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

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

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Movies
				</Typography>

				<Suspense fallback={<h1>load</h1>}>
					<>
						<ShowResultsNumber
							totalResults={data?.movies?.length as number}
							severity='info'
						/>
						<ItemsList
							items={data.movies}
							renderItems={(movie: any) => (
								<MovieCard
									key={movie.id}
									id={movie.id}
									movie={movie.details}
									supports={movie.support}
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
