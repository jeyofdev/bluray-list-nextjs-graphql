import { XMarkIcon } from '@heroicons/react/24/outline';
import {
	Box,
	Container,
	FormControl,
	IconButton,
	Input,
	Modal,
	Typography,
} from '@mui/material';
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react';

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
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' && search.length > 0) {
			// eslint-disable-next-line no-console
			console.log('ok', search);
		}
	};

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

						<FormControl
							variant='standard'
							classes={{ root: 'w-full bg-transparent mt-4' }}
						>
							<Input
								type={'text'}
								placeholder='Enter a movie'
								value={search}
								onChange={handleSearch}
								onKeyUp={onKeyUp}
								disableUnderline
								autoFocus
								classes={{
									input:
										'p-0 h-[4.5rem] text-7xl uppercase text-primary-400 placeholder:text-primary-300',
								}}
							/>
						</FormControl>
					</Box>
				</Container>
			</Box>
		</Modal>
	);
};

export default SearchModal;
