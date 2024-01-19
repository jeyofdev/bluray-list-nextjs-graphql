'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';

const MoviesPage = () => {
	return (
		<ContentContainer>
			<Typography variant='h4' component='h1' className='text-center'>
				Movies
			</Typography>

			<Box className='mt-4 flex justify-center'>
				<ButtonAction
					icon={<AddIcon className='size-6' />}
					onClick={() => {
						// open modal
					}}
				/>
			</Box>
		</ContentContainer>
	);
};

export default MoviesPage;
