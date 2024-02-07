import ItemsList from '@components/ui/list/ItemList';
import FilterSettings from '@components/ui/menu/FilterSettings';
import SortSettings from '@components/ui/menu/SortSettings';
import ShowResultsNumber from '@components/ui/result/ShowResultNumber';
import { TypeEnum } from '@enums/index';
import useFilter from '@hooks/useFilter';
import useSort from '@hooks/useSort';
import { ToastOnCloseType } from '@hooks/useToast';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
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
		getGenresByItems,
		getYearByItem,
	} = useFilter(items, type);

	const { sorts, setSorts, sortItems } = useSort(seriesFiltered);

	return (
		<>
			<Box className='mb-3 flex items-center justify-between gap-4'>
				<ShowResultsNumber
					totalResults={seriesFiltered?.length as number}
					severity='info'
					noMargin
				/>

				<Box className='flex justify-center gap-2'>
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

					{seriesFiltered ? (
						<SortSettings
							title='Sort'
							sorts={sorts}
							setSorts={setSorts}
							sortNameItems={[
								{ key: 'createdAt', label: 'Created at' },
								{ key: 'name', label: 'Title' },
							]}
							sortOrderItems={[
								{ key: 'asc', label: 'Asc' },
								{ key: 'desc', label: 'Desc' },
							]}
						/>
					) : null}
				</Box>
			</Box>

			<ItemsList
				items={sortItems}
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
