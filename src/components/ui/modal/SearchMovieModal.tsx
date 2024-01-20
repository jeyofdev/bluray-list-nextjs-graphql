import SearchMovieCardProps from '@components/cards/SearchMovieCard';
import SearchResultList from '@components/ui/list/SearchResultList';
import Modal, { SearchModalPropsType } from '@components/ui/modal/Modal';
import { useSearchMoviesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import usePagination from '@hooks/usePagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Pagination, PaginationItem } from '@mui/material';
import { Suspense, useState } from 'react';
import ShowResultsNumber from '../result/ShowResultNumber';

type SearchMovieModal = Pick<SearchModalPropsType, 'open' | 'onClose'>;

const SearchMovieModal = ({ open, onClose }: SearchMovieModal) => {
	const [search, setSearch] = useState<string>('');
	const [searchQuery, setSearchQuery] = useState<string>('');

	const { currentPage, handleChangeCurrentPage } = usePagination();

	const { data } = useSearchMoviesSuspenseQuery({
		variables: {
			searchOptions: {
				query: searchQuery,
				page: currentPage,
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

					{searchQuery &&
					data?.searchMovies?.total_results &&
					data?.searchMovies?.total_results > 0 ? (
						<Box className='my-8 flex justify-center'>
							<Pagination
								classes={{
									ul: 'gap-2',
								}}
								size='small'
								count={
									(data?.searchMovies?.total_pages as number) > 100
										? 100
										: data?.searchMovies?.total_pages
								}
								page={currentPage}
								onChange={handleChangeCurrentPage}
								renderItem={item => (
									<PaginationItem
										classes={{
											root: 'text-primary-900 text-xl w-9 h-9 rounded-full',
											selected: 'bg-transparent text-lg',
										}}
										slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
										{...item}
									/>
								)}
							/>
						</Box>
					) : null}
				</Suspense>
			</Box>
		</Modal>
	);
};

export default SearchMovieModal;
