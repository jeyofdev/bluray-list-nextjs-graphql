'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import SearchMovieModal from '@components/ui/modal/SearchMovieModal';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const MoviesPage = () => {
	const [showSearchModal, setshowSearchModal] = useState<boolean>(false);

	const handleOpenSearchModal = () => {
		setshowSearchModal(true);
	};

	const handleCloseSearchModal = () => {
		setshowSearchModal(false);
	};

	return (
		<ContentContainer>
			<Typography variant='h4' component='h1' className='text-center'>
				Movies
			</Typography>

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
	);
};

export default MoviesPage;
