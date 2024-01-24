import ListItemCard from '@components/cards/ListItemCard';
import { TypeEnum } from '@enums/index';
import {
	SerieDetails,
	useDeleteSerieMutation,
	useUpdateSerieMutation,
} from '@graphql/__generated__/graphql-type';
import { MouseEventHandler } from 'react';
import { SupportType, ToastType } from '../../types';

type SerieCardPropsType = {
	id: string;
	season: number;
	serie: SerieDetails;
	supports?: SupportType;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	refetch: any;
	toast: ToastType;
};

const SerieCard = ({
	id,
	season,
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
			type={TypeEnum.SERIE}
			id={id}
			posterPath={serie.poster_path as string}
			title={serie?.name as string}
			rating={serie?.seasons?.[season]?.vote_average as number}
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
