import { XMarkIcon } from '@heroicons/react/24/outline';
import { Box, Container, IconButton, Modal, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import SearchTextField from '../form/SearchTextField';

export type SearchModalPropsType = {
	open: boolean;
	onClose: () => void;
	title: string;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
};

const SearchModal = ({
	open,
	onClose,
	title,
	search,
	setSearch,
}: SearchModalPropsType) => {
	return (
		<Modal open={open}>
			<Box className='absolute left-1/2 top-1/2 h-screen w-full -translate-x-1/2 -translate-y-1/2 bg-primary-50'>
				<Container
					maxWidth='lg'
					classes={{
						root: 'relative p-4 w-full h-screen overflow-auto',
					}}
				>
					<IconButton
						size='large'
						classes={{
							root: 'absolute right-4 top-1 bg-transparent hover:bg-transparent',
						}}
						onClick={onClose}
					>
						<XMarkIcon className='size-20 text-primary-200' />
					</IconButton>

					<Box className='mt-10'>
						<Typography
							id='modal-modal-title'
							variant='h6'
							className='text-primary-300'
						>
							{title}
						</Typography>

						<SearchTextField search={search} setSearch={setSearch} />
					</Box>
				</Container>
			</Box>
		</Modal>
	);
};

export default SearchModal;
