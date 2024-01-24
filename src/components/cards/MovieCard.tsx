import ListItemCard from '@components/cards/ListItemCard';
import {
	MovieDetails,
	useDeleteMovieMutation,
	useUpdateMovieMutation,
} from '@graphql/__generated__/graphql-type';
import { MouseEventHandler } from 'react';
import { SupportType, ToastType } from '../../types';

type MovieCardPropsType = {
	id: string;
	movie: MovieDetails;
	supports?: SupportType;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	refetch: any;
	toast: ToastType;
};

const MovieCard = ({
	id,
	movie,
	supports,
	onClick,
	refetch,
	toast,
}: MovieCardPropsType) => {
	const [deleteMovie, { data: deletedMovie }] = useDeleteMovieMutation();
	const [updateMovie, { data: updatedMovie }] = useUpdateMovieMutation();

	return (
		<ListItemCard
			type='movie'
			id={id}
			posterPath={movie.poster_path as string}
			title={movie?.title as string}
			supports={supports}
			onClick={onClick}
			onDelete={() => {
				deleteMovie({
					variables: {
						movieId: id,
					},
					onCompleted: refetch,
				});
			}}
			onUpdate={updateMovie}
			refetch={refetch}
			toast={toast}
		/>
	);
};

export default MovieCard;
