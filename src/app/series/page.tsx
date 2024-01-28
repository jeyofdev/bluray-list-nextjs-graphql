'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SerieCard from '@components/cards/SerieCard';
import ContentContainer from '@components/containers/ContentContainer';
import { ButtonAction } from '@components/ui/buttons/ButtonAction';
import ItemsList from '@components/ui/list/ItemList';
import SearchSerieModal from '@components/ui/modal/SearchSerieModal';
import ShowResultsNumber from '@components/ui/result/ShowResultNumber';
import Toast from '@components/ui/toast/Toast';
import { useSeriesSuspenseQuery } from '@graphql/__generated__/graphql-type';
import useSearch from '@hooks/useSearch';
import useToast from '@hooks/useToast';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

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

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					Series
				</Typography>

				<Suspense fallback={<h1>load</h1>}>
					<>
						<ShowResultsNumber
							totalResults={data?.series?.length as number}
							severity='info'
						/>

						<ItemsList
							items={data.series}
							renderItems={(serie: any) => (
								<SerieCard
									key={serie.id}
									id={serie.id}
									season={serie.season}
									serie={serie.details}
									supports={serie.support}
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
