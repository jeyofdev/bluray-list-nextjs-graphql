import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import CardSettings from '@components/ui/menu/CardSettings';
import DeleteModal from '@components/ui/modal/DeleteModal';
import UpdateModal from '@components/ui/modal/UpdateModal';
import {
	MovieDetails,
	useDeleteMovieMutation,
} from '@graphql/__generated__/graphql-type';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { MouseEventHandler, useState } from 'react';
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
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
	const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

	const [deleteMovie, { data: deletedMovie }] = useDeleteMovieMutation();

	return (
		<>
			<Card className='relative flex items-stretch'>
				<CardSettings
					title='Movie settings'
					setShowModalDelete={setShowModalDelete}
					setShowModalEdit={setShowModalUpdate}
				/>

				<CardActionArea
					className='flex flex-col items-center justify-start'
					onClick={onClick}
				>
					<CardMedia
						component='img'
						className='w-full'
						image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						title={movie?.title as string}
					/>

					<CardContent>
						<Typography
							variant='h6'
							component='h3'
							className='text-center text-lg leading-6'
						>
							{movie.title}
						</Typography>

						<Box className='flex items-center justify-center gap-4'>
							{supports?.bluray && (
								<BlurayIcon className='text-4xl text-primary-900' />
							)}

							{supports?.bluray_hd && (
								<BlurayUltraHDIcon className='text-6xl text-primary-900' />
							)}
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>

			<DeleteModal
				itemTitle={movie.title as string}
				open={showModalDelete}
				onClick={setShowModalDelete}
				onDelete={() => {
					deleteMovie({
						variables: {
							movieId: id,
						},
						onCompleted: refetch,
					});
				}}
				toast={toast}
			/>

			<UpdateModal
				itemTitle={movie.title as string}
				open={showModalUpdate}
				onClick={setShowModalUpdate}
				onUpdate={() => {
					// eslint-disable-next-line no-console
					console.log('update success');
				}}
				toast={toast}
			/>
		</>
	);
};

export default MovieCard;
