import SearchMovieCardProps from '@components/cards/SearchMovieCard';
import SearchResultList from '@components/ui/list/SearchResultList';
import Modal, { SearchModalPropsType } from '@components/ui/modal/Modal';
import { useSearchMoviesSuspenseQuery } from '@graphql/__generated__/graphql-type';
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
			<SearchResultList
				items={data?.searchMovies?.results}
				renderItems={(data: any) => (
					<SearchMovieCardProps key={data.id} movie={data} />
				)}
			/>
		</Modal>
	);
};

export default SearchMovieModal;
