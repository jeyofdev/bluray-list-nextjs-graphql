import { useSearchSeriesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import usePagination from '@hooks/usePagination';
import useSearch from '@hooks/useSearch';
import { Typography } from '@mui/material';
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
					renderItems={(data: any) => <Typography>{data.name}</Typography>}
				/>
			}
			searchTextFieldPlaceholder='Enter a serie'
		/>
	);
};

export default SearchSerieModal;
