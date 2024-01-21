import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import CardSettings from '@components/ui/menu/CardSettings';
import { MovieDetails } from '@graphql/__generated__/graphql-type';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { MouseEventHandler, useState } from 'react';
import { SupportType } from '../../types';

type MovieCardPropsType = {
	movie: MovieDetails;
	supports?: SupportType;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const MovieCard = ({ movie, supports, onClick }: MovieCardPropsType) => {
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
	const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

	return (
		<Card className='relative'>
			<CardSettings
				title='Movie settings'
				setShowModalDelete={setShowModalDelete}
				setShowModalEdit={setShowModalEdit}
			/>
			<CardActionArea onClick={onClick}>
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
	);
};

export default MovieCard;
