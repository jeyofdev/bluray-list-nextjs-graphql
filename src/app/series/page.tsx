'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SerieCard from '@components/cards/SerieCard';
import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import ItemsList from '@components/ui/list/ItemList';
import FilterSettings from '@components/ui/menu/FilterSettings';
import SearchSerieModal from '@components/ui/modal/SearchSerieModal';
import ShowResultsNumber from '@components/ui/result/ShowResultNumber';
import Toast from '@components/ui/toast/Toast';
import { TypeEnum } from '@enums/index';
import {
	SerieDetails,
	SerieResponse,
	useSeriesSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import useFilter from '@hooks/useFilter';
import useSearch from '@hooks/useSearch';
import useToast from '@hooks/useToast';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { SupportType } from '../../types';

const SeriesPage = () => {
	const router = useRouter();

	const { showSearchModal, onOpenSearchModal, onCloseSearchModal } =
		useSearch();

	const {
		toast,
		onOpen: handleOpenToast,
		onClose: handleCloseToast,
	} = useToast();

	const { data, refetch } = useSeriesSuspenseQuery({
		fetchPolicy: 'cache-and-network',
	});

	const {
		filters,
		setFilters,
		itemsFiltered: seriesFiltered,
		setItemsFiltered,
		getGenresByItems,
		getYearByItem,
	} = useFilter(data?.series as SerieResponse[], TypeEnum.SERIE);

	useEffect(() => {
		setItemsFiltered(data?.series as SerieResponse[]);
	}, [data?.series, setItemsFiltered]);

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Series
				</Typography>

				<Suspense fallback={<h1>load</h1>}>
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
										onOpen: handleOpenToast,
										onClose: handleCloseToast,
									}}
								/>
							)}
						/>
					</>
				</Suspense>

				<Box className='mt-4 flex justify-center'>
					<ButtonAction
						icon={<AddIcon className='size-6' />}
						onClick={onOpenSearchModal}
					/>
				</Box>
			</ContentContainer>

			<SearchSerieModal
				open={showSearchModal}
				onClose={onCloseSearchModal}
				refetch={refetch}
			/>

			<Toast
				open={toast.open}
				onClose={handleCloseToast}
				message={toast.message}
			/>
		</NoSSRWrapper>
	);
};

export default SeriesPage;
