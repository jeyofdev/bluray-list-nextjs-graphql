import { MovieDetails } from '@graphql/__generated__/graphql-type';
import {
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
	return (
		<Card className='flex items-stretch'>
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
