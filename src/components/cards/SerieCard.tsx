import ListItemCard from '@components/cards/ListItemCard';
import {
	SerieDetails,
	useDeleteSerieMutation,
	useUpdateSerieMutation,
} from '@graphql/__generated__/graphql-type';
import { MouseEventHandler } from 'react';
import { SupportType, ToastType } from '../../types';

type SerieCardPropsType = {
	id: string;
	serie: SerieDetails;
	supports?: SupportType;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	refetch: any;
	toast: ToastType;
};

const SerieCard = ({
	id,
	serie,
	supports,
	onClick,
	refetch,
	toast,
}: SerieCardPropsType) => {
	const [deleteSerie, { data: deletedMovie }] = useDeleteSerieMutation();
	const [updateSerie, { data: updatedMovie }] = useUpdateSerieMutation();

	return (
		<ListItemCard
			type='serie'
			id={id}
			posterPath={serie.poster_path as string}
			title={serie?.name as string}
			supports={supports}
			onClick={onClick}
			onDelete={() => {
				deleteSerie({
					variables: {
						serieId: id,
					},
					onCompleted: refetch,
				});
			}}
			onUpdate={updateSerie}
			refetch={refetch}
			toast={toast}
		/>
	);
};

export default SerieCard;
