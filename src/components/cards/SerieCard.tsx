import ListItemCard from '@components/cards/ListItemCard';
import { SerieDetails } from '@graphql/__generated__/graphql-type';
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
	return (
		<ListItemCard
			id={id}
			posterPath={serie.poster_path as string}
			title={serie?.name as string}
			supports={supports}
			onClick={onClick}
			onDelete={() => {}}
			onUpdate={() => {}}
			refetch={refetch}
			toast={toast}
		/>
	);
};

export default SerieCard;
