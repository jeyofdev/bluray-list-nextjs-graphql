import SearchMovieCardProps from '@components/cards/SearchMovieCard';
import SearchResultList from '@components/ui/list/SearchResultList';
import Modal, { SearchModalPropsType } from '@components/ui/modal/Modal';
import { useSearchMoviesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { Suspense, useState } from 'react';
import ShowResultsNumber from '../result/ShowResultNumber';

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
			<Box className='mt-8'>
				<Suspense fallback={<h1>loading...</h1>}>
					{searchQuery ? (
						<ShowResultsNumber
							totalResults={data?.searchMovies?.total_results as number}
						/>
					) : null}

					<SearchResultList
						items={data?.searchMovies?.results}
						renderItems={(data: any) => (
							<SearchMovieCardProps key={data.id} movie={data} />
						)}
					/>
				</Suspense>
			</Box>
		</Modal>
	);
};

export default SearchMovieModal;
