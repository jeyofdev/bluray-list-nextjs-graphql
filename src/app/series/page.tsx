'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import SearchSerieModal from '@components/ui/modal/SearchSerieModal';
import useSearch from '@hooks/useSearch';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';

const SeriesPage = () => {
	const { showSearchModal, onOpenSearchModal, onCloseSearchModal } =
		useSearch();

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Series
				</Typography>

				<Box className='mt-4 flex justify-center'>
					<ButtonAction
						icon={<AddIcon className='size-6' />}
						onClick={onOpenSearchModal}
					/>
				</Box>
			</ContentContainer>

			<SearchSerieModal
				open={showSearchModal}
				onClose={onCloseSearchModal}
				refetch={() => {}}
			/>
		</NoSSRWrapper>
	);
};

export default SeriesPage;
