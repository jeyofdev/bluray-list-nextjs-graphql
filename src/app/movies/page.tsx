'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import MoviesListSuspense from '@components/suspense/MoviesListSuspense';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import Toast from '@components/ui/toast/Toast';
import { TypeEnum } from '@enums/index';
import {
	MovieResponse,
	useMoviesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import useSearch from '@hooks/useSearch';
import useToast from '@hooks/useToast';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import Loading from '@routes/loading';
import { Suspense } from 'react';

const MoviesPage = () => {
	const { showSearchModal, onOpenSearchModal, onCloseSearchModal } =
		useSearch();

	const { data, refetch } = useMoviesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	const {
		toast,
		onOpen: handleOpenToast,
		onClose: handleCloseToast,
	} = useToast();

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Movies
				</Typography>

				<Suspense fallback={<Loading label='loading movies...' />}>
					<MoviesListSuspense
						items={data?.movies as MovieResponse[]}
						refetch={refetch}
						onToastOpen={handleOpenToast}
						onToastClose={handleCloseToast}
						showSearchModal={showSearchModal}
						onCloseSearchModal={onCloseSearchModal}
						type={TypeEnum.MOVIE}
					/>
				</Suspense>

				<Box className='mt-4 flex justify-center'>
					<ButtonAction
						icon={<AddIcon className='size-6' />}
						onClick={onOpenSearchModal}
					/>
				</Box>
			</ContentContainer>

			<Toast
				open={toast.open}
				onClose={handleCloseToast}
				message={toast.message}
			/>
		</NoSSRWrapper>
	);
};

export default MoviesPage;
