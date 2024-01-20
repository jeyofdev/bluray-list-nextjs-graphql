'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import MovieCard from '@components/cards/MovieCard';
import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import ItemsList from '@components/ui/list/ItemList';
import SearchMovieModal from '@components/ui/modal/SearchMovieModal';
import { useMoviesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { Suspense, useState } from 'react';

const MoviesPage = () => {
	const [showSearchModal, setshowSearchModal] = useState<boolean>(false);

	const { data } = useMoviesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	const handleOpenSearchModal = () => {
		setshowSearchModal(true);
	};

	const handleCloseSearchModal = () => {
		setshowSearchModal(false);
	};

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='text-center'>
					Movies
				</Typography>

				<Suspense fallback={<h1>load</h1>}>
					<ItemsList
						items={data.movies}
						renderItems={(movie: any) => (
							<MovieCard
								key={movie.id}
								movie={movie.details}
								supports={movie.support}
								onClick={() => {}}
							/>
						)}
					/>
				</Suspense>

				<Box className='mt-4 flex justify-center'>
					<ButtonAction
						icon={<AddIcon className='size-6' />}
						onClick={handleOpenSearchModal}
					/>
				</Box>

				<SearchMovieModal
					open={showSearchModal}
					onClose={handleCloseSearchModal}
				/>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default MoviesPage;
