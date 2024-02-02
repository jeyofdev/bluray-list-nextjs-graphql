import MovieCard from '@components/cards/MovieCard';
import ItemsList from '@components/ui/list/ItemList';
import FilterSettings from '@components/ui/menu/FilterSettings';
import SearchMovieModal from '@components/ui/modal/SearchMovieModal';
import ShowResultsNumber from '@components/ui/result/ShowResultNumber';
import { TypeEnum } from '@enums/index';
import {
	MovieDetails,
	MovieResponse,
} from '@graphql/__generated__/graphql-type';
import useFilter from '@hooks/useFilter';
import { ToastOnCloseType } from '@hooks/useToast';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SupportType } from '../../types';

type MoviesListSuspensePropsType = {
	items: MovieResponse[];
	type: TypeEnum;
	refetch: any;
	showSearchModal: boolean;
	onCloseSearchModal: () => void;
	onToastOpen: (message: string) => void;
	onToastClose: ToastOnCloseType;
};

const MoviesListSuspense = ({
	items,
	type,
	refetch,
	showSearchModal,
	onCloseSearchModal,
	onToastOpen,
	onToastClose,
}: MoviesListSuspensePropsType) => {
	const router = useRouter();

	const {
		filters,
		setFilters,
		itemsFiltered: moviesFiltered,
		setItemsFiltered,
		getGenresByItems,
		getYearByItem,
	} = useFilter(items, type);

	useEffect(() => {
		setItemsFiltered(items);
	}, [items, setItemsFiltered]);

	return (
		<>
			<Box className='mb-3 flex items-center justify-between gap-4'>
				<ShowResultsNumber
					totalResults={moviesFiltered?.length as number}
					severity='info'
					noMargin
				/>

				{moviesFiltered ? (
					<FilterSettings
						title='Filters'
						genresLabel={getGenresByItems()}
						yearsLabel={getYearByItem().sort(
							(a: string, b: string) => Number(a) - Number(b),
						)}
						filters={filters}
						setFilters={setFilters}
					/>
				) : null}
			</Box>

			<ItemsList
				items={moviesFiltered}
				renderItems={(movie: MovieResponse) => (
					<MovieCard
						key={movie.id}
						id={movie.id as string}
						movie={movie.details as MovieDetails}
						supports={movie.support as SupportType | undefined}
						onClick={() => router.push(`/movies/${movie?.id}`)}
						refetch={refetch}
						toast={{
							onOpen: onToastOpen,
							onClose: onToastClose,
						}}
					/>
				)}
			/>

			<SearchMovieModal
				open={showSearchModal}
				onClose={onCloseSearchModal}
				refetch={refetch}
			/>
		</>
	);
};

export default MoviesListSuspense;
