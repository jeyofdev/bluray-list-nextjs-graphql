import { Cast, Crew, SerieDetails } from '@graphql/__generated__/graphql-type';
import { Box, Typography } from '@mui/material';
import { SupportType } from '../../types';
import SingleCard from './SingleCard';

type SingleSerieCardPropsType = {
	data: SerieDetails;
	season: number;
	cast: Cast[];
	crew: Crew[];
	supports: SupportType;
};

export const SingleSerieCard = ({
	data,
	cast,
	crew,
	season,
	supports,
}: SingleSerieCardPropsType) => {
	const isSeasonNumberZeroExist = () => {
		const listSeason = data?.seasons?.map(season => season?.season_number);
		return listSeason?.find(season => season === 0);
	};

	const director = crew.find(
		item =>
			item.job === 'Director' || item.known_for_department === 'Directing',
	);

	const music = crew.find(
		item => item.job === 'Music' || item.job === 'Original Music Composer',
	);

	const producers = crew.filter(item => item.job === 'Producer').slice(0, 3);

	const seasonData = data?.seasons?.find(
		seasonData => seasonData?.season_number === season,
	);

	return (
		<SingleCard
			title={data?.name as string}
			originalTitle={data?.original_name as string}
			overview={
				data?.seasons?.[isSeasonNumberZeroExist() ? season - 1 : season]
					?.overview as string
			}
			posterPath={data?.poster_path as string}
			rating={data?.vote_average as number}
			director={director as Crew}
			music={music as Crew}
			producers={producers}
			cast={cast}
			supports={supports}
			subtitle={
				<Box className='flex gap-2'>
					<Box className='flex gap-2'>
						<Typography
							variant='body1'
							component='h6'
							className='font-semibold'
						>
							Season {season}
						</Typography>
						-
						<Typography
							variant='body1'
							component='h6'
							className='font-semibold'
						>
							{data?.seasons?.[season]?.episode_count} episodes
						</Typography>
						{seasonData?.air_date
							? -(
									<Typography
										variant='body1'
										component='h6'
										className='font-semibold'
									>
										{seasonData?.air_date?.slice(0, 4)}
									</Typography>
								)
							: null}
					</Box>
				</Box>
			}
		/>
	);
};

export default SingleSerieCard;
