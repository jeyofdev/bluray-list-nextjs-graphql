import SearchSerieCard from '@components/cards/SearchSerieCard';
import {
	useAddSerieMutation,
	useSearchSeriesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import usePagination from '@hooks/usePagination';
import useSearch from '@hooks/useSearch';
import SearchResultList from '../list/SearchResultList';
import SearchModal, { SearchModalPropsType } from './SearchModal';

type SearchSerieModalPropsType = Pick<
	SearchModalPropsType,
	'open' | 'onClose'
> & {
	refetch: any;
};

const SearchSerieModal = ({
	open,
	onClose,
	refetch,
}: SearchSerieModalPropsType) => {
	const { search, searchQuery, setSearch, setSearchQuery } = useSearch();
	const { currentPage, handleChangeCurrentPage, resetCurrentPage } =
		usePagination();

	const { data } = useSearchSeriesSuspenseQuery({
		variables: {
			searchOptions: {
				query: searchQuery,
				page: currentPage,
			},
		},
	});

	const [addSerie, { data: serieAdded }] = useAddSerieMutation();

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
			title='Search serie'
			search={search}
			setSearch={setSearch}
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
			totalResults={data?.searchSeries?.total_results as number}
			currentPage={currentPage}
			handleChangeCurrentPage={handleChangeCurrentPage}
			list={
				<SearchResultList
					items={data?.searchSeries?.results}
					renderItems={(data: any) => (
						<SearchSerieCard
							key={data.id}
							serie={data}
							addSerie={addSerie}
							refetch={refetch}
							onClose={handleClose}
						/>
					)}
				/>
			}
			searchTextFieldPlaceholder='Enter a serie'
		/>
	);
};

export default SearchSerieModal;
