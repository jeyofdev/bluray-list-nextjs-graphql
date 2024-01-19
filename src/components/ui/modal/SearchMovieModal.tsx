import Modal, { SearchModalPropsType } from '@components/ui/modal/Modal';
import { useSearchMoviesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

type SearchMovieModal = Pick<SearchModalPropsType, 'open' | 'onClose'>;

const SearchMovieModal = ({ open, onClose }: SearchMovieModal) => {
	const [search, setSearch] = useState<string>('');
	const [searchQuery, setSearchQuery] = useState<string>('');

	const { data } = useSearchMoviesSuspenseQuery({
		variables: {
			searchOptions: {
				query: searchQuery,
				page: 1,
			},
		},
	});

	return (
		<Modal
			open={open}
			onClose={onClose}
			title='Search movie'
			search={search}
			setSearch={setSearch}
			setSearchQuery={setSearchQuery}
		>
			{data?.searchMovies?.results?.map(movie => (
				<Box key={movie?.id} className='mb-4'>
					<Typography variant='h5' component='h3'>
						{movie?.title}
					</Typography>
				</Box>
			))}
		</Modal>
	);
};

export default SearchMovieModal;
