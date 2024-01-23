import SearchTextField from '@components/ui/form/SearchTextField';
import Pagination from '@components/ui/pagination/Pagination';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Box, Container, IconButton, Modal, Typography } from '@mui/material';
import { Dispatch, SetStateAction, Suspense } from 'react';
import {
	ChildrenType,
	PaginationHandleChangeCurrentPage,
} from '../../../types';
import ShowResultsNumber from '../result/ShowResultNumber';

export type SearchModalPropsType = {
	open: boolean;
	onClose: () => void;
	title: string;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
	totalResults: number;
	currentPage: number;
	handleChangeCurrentPage: PaginationHandleChangeCurrentPage;
	list: ChildrenType;
	searchTextFieldPlaceholder: string;
};

const SearchModal = ({
	open,
	onClose,
	title,
	search,
	setSearch,
	searchQuery,
	setSearchQuery,
	totalResults,
	currentPage,
	handleChangeCurrentPage,
	list,
	searchTextFieldPlaceholder,
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

						<SearchTextField
							search={search}
							setSearch={setSearch}
							setSearchQuery={setSearchQuery}
							placeholder={searchTextFieldPlaceholder}
						/>

						<Box className='mt-8'>
							<Suspense fallback={<h1>loading...</h1>}>
								{searchQuery ? (
									<ShowResultsNumber totalResults={totalResults} />
								) : null}

								{list}

								{searchQuery && totalResults && totalResults > 0 ? (
									<Box className='my-8 flex justify-center'>
										<Pagination
											totalItems={totalResults}
											page={currentPage}
											onChange={handleChangeCurrentPage}
										/>
									</Box>
								) : null}
							</Suspense>
						</Box>
					</Box>
				</Container>
			</Box>
		</Modal>
	);
};

export default SearchModal;
