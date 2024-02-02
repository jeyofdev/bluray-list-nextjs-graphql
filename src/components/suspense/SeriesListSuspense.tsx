import ItemsList from '@components/ui/list/ItemList';
import FilterSettings from '@components/ui/menu/FilterSettings';
import ShowResultsNumber from '@components/ui/result/ShowResultNumber';
import { TypeEnum } from '@enums/index';
import useFilter from '@hooks/useFilter';
import { ToastOnCloseType } from '@hooks/useToast';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
	SerieDetails,
	SerieResponse,
} from '../../graphql/__generated__/graphql-type';
import { SupportType } from '../../types';
import SerieCard from '../cards/SerieCard';
import SearchSerieModal from '../ui/modal/SearchSerieModal';

type SeriesListSuspensePropsType = {
	items: SerieResponse[];
	type: TypeEnum;
	refetch: any;
	showSearchModal: boolean;
	onCloseSearchModal: () => void;
	onToastOpen: (message: string) => void;
	onToastClose: ToastOnCloseType;
};

const SeriesListSuspense = ({
	items,
	type,
	refetch,
	showSearchModal,
	onCloseSearchModal,
	onToastOpen,
	onToastClose,
}: SeriesListSuspensePropsType) => {
	const router = useRouter();

	const {
		filters,
		setFilters,
		itemsFiltered: seriesFiltered,
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
					totalResults={seriesFiltered?.length as number}
					severity='info'
					noMargin
				/>

				{seriesFiltered ? (
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
				items={seriesFiltered}
				renderItems={(serie: SerieResponse) => (
					<SerieCard
						key={serie.id}
						id={serie.id as string}
						season={serie.season as number}
						serie={serie.details as SerieDetails}
						supports={serie.support as SupportType | undefined}
						onClick={() => router.push(`/series/${serie?.id}`)}
						refetch={refetch}
						toast={{
							onOpen: onToastOpen,
							onClose: onToastClose,
						}}
					/>
				)}
			/>

			<SearchSerieModal
				open={showSearchModal}
				onClose={onCloseSearchModal}
				refetch={refetch}
			/>
		</>
	);
};

export default SeriesListSuspense;
