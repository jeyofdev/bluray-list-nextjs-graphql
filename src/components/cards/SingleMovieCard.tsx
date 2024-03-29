import { Cast, Crew, MovieDetails } from '@graphql/__generated__/graphql-type';
import { Box, Typography } from '@mui/material';
import { formatDate, formatNumberToHours } from '@utils/index';
import { SupportType } from '../../types';
import SingleCard from './SingleCard';

type SingleMovieCardPropsType = {
	data: MovieDetails;
	cast: Cast[];
	crew: Crew[];
	supports: SupportType;
};

export const SingleMovieCard = ({
	data,
	cast,
	crew,
	supports,
}: SingleMovieCardPropsType) => {
	const director = crew.find(
		item =>
			item.job === 'Director' || item.known_for_department === 'Directing',
	);

	const music = crew.find(
		item => item.job === 'Music' || item.job === 'Original Music Composer',
	);

	const producers = () => {
		const producersResult = crew.filter(item => item.job === 'Producer');
		if (producersResult.length > 0) {
			return Array.from(new Set(producersResult)).slice(0, 3);
		}

		return undefined;
	};

	return (
		<SingleCard
			title={data?.title as string}
			originalTitle={data?.original_title as string}
			overview={data?.overview as string}
			posterPath={data?.poster_path as string}
			rating={data?.vote_average as number}
			director={director}
			music={music}
			producers={producers()}
			cast={cast}
			supports={supports}
			subtitle={
				<Box className='flex flex-col gap-2 sm:flex-row'>
					<Box className='flex gap-2'>
						{data?.release_date ? (
							<>
								<Typography
									variant='body1'
									component='h6'
									className='font-semibold'
								>
									{formatDate(data?.release_date as string)}
								</Typography>
								-
							</>
						) : null}
						<Typography
							variant='body1'
							component='h6'
							className='font-semibold'
						>
							{formatNumberToHours(data?.runtime as number)}
						</Typography>
					</Box>

					<Box className='hidden gap-2 md:flex'>
						-
						<Typography
							variant='body1'
							component='h6'
							className='font-semibold'
						>
							{data?.genres?.map(genre => genre?.name).join(', ')}
						</Typography>
					</Box>
				</Box>
			}
		/>
	);
};

export default SingleMovieCard;
