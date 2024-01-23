import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import { SupportEnum } from '@enums/index';
import { MovieDetails } from '@graphql/__generated__/graphql-type';
import useSupport from '@hooks/useSupport';
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Checkbox,
	Typography,
} from '@mui/material';

type SearchMovieCardProps = {
	movie: MovieDetails;
	addMovie?: any;
	refetch: any;
	onClose: () => void;
};

const SearchMovieCard = ({
	movie,
	addMovie,
	refetch,
	onClose,
}: SearchMovieCardProps) => {
	const { movieSupports, onChange: handleChangeMovieSupports } = useSupport();

	const handleClick = () => {
		addMovie({
			variables: {
				tmdbMovieId: movie.id,
				support: movieSupports,
			},
			onCompleted: refetch,
		});

		onClose();
	};

	return (
		<Card className='group relative flex items-stretch'>
			<Box className='absolute left-0 top-0 z-50 hidden size-full flex-col items-center justify-center p-4 hover:flex group-hover:flex'>
				<Box className='absolute -z-10 size-full bg-primary-200 opacity-90'></Box>
				<Typography variant='h6' className='mb-4 text-center text-primary-900'>
					Select the platform(s)
				</Typography>

				<Box>
					<Checkbox
						icon={<BlurayIcon className='text-5xl text-primary-900' />}
						checkedIcon={<BlurayIcon className='text-5xl text-sky-400' />}
						onChange={() => handleChangeMovieSupports(SupportEnum.BLURAY)}
					/>

					<Checkbox
						icon={<BlurayUltraHDIcon className='text-7xl text-primary-900' />}
						checkedIcon={
							<BlurayUltraHDIcon className='text-7xl text-sky-400' />
						}
						onChange={() => handleChangeMovieSupports(SupportEnum.BLURAY_HD)}
					/>
				</Box>

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

export default SearchMovieCard;
