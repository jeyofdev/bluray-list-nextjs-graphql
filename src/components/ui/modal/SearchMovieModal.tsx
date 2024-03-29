import SearchMovieCard from '@components/cards/SearchMovieCard';
import {
	useAddMovieMutation,
	useSearchMoviesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import usePagination from '@hooks/usePagination';
import useSearch from '@hooks/useSearch';
import SearchResultList from '../list/SearchResultList';
import SearchModal, { SearchModalPropsType } from './SearchModal';

type SearchMovieModalPropsType = Pick<
	SearchModalPropsType,
	'open' | 'onClose'
> & {
	refetch: any;
};

const SearchMovieModal = ({
	open,
	onClose,
	refetch,
}: SearchMovieModalPropsType) => {
	const { search, searchQuery, setSearch, setSearchQuery } = useSearch();
	const { currentPage, handleChangeCurrentPage, resetCurrentPage } =
		usePagination();

	const { data } = useSearchMoviesSuspenseQuery({
		variables: {
			searchOptions: {
				query: searchQuery,
				page: currentPage,
			},
		},
	});

	const [addMovie, { data: movieAdded }] = useAddMovieMutation();

	// clear modal data
	const handleClose = () => {
		onClose();
		setSearch('');
		setSearchQuery('');
		resetCurrentPage();
	};

	return (
		<SearchModal
			open={open}
			onClose={handleClose}
			title='Search movie'
			search={search}
			setSearch={setSearch}
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
			totalResults={data?.searchMovies?.total_results as number}
			currentPage={currentPage}
			handleChangeCurrentPage={handleChangeCurrentPage}
			list={
				<SearchResultList
					items={data?.searchMovies?.results}
					renderItems={(data: any) => (
						<SearchMovieCard
							key={data.id}
							movie={data}
							addMovie={addMovie}
							refetch={refetch}
							onClose={handleClose}
						/>
					)}
				/>
			}
			searchTextFieldPlaceholder='Enter a movie'
		/>
	);
};

export default SearchMovieModal;
