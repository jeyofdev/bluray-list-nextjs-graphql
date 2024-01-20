import { MovieDetails } from '@graphql/__generated__/graphql-type';
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

type SearchMovieCardProps = {
	movie: MovieDetails;
};

const SearchMovieCardProps = ({ movie }: SearchMovieCardProps) => {
	const handleClick = () => {
		// eslint-disable-next-line no-console
		console.log('click ok');
	};

	return (
		<Card className='group relative flex items-stretch'>
			<Box className='absolute left-0 top-0 z-50 hidden size-full flex-col items-center justify-center p-4 hover:flex group-hover:flex'>
				<Box className='absolute -z-10 size-full bg-primary-200 opacity-90'></Box>
				<Typography variant='h6' className='mb-4 text-center text-primary-900'>
					Select the platform(s)
				</Typography>

				<Button variant='contained' color='secondary' onClick={handleClick}>
					Add to list
				</Button>
			</Box>

			<CardActionArea className='flex flex-col items-center justify-start'>
				<CardMedia
					component='img'
					className='w-full'
					image={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
					title={movie.title as string}
				/>
				<CardContent>
					<Typography
						variant='h6'
						component='h3'
						className='text-center text-lg leading-6'
					>
						{movie?.title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default SearchMovieCardProps;
