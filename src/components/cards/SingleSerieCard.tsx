import PersonAvatar from '@components/ui/avatar/PersonAvatar';
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
			supports={supports}
			subtitle={
				<Box className='flex gap-2'>
					<>
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
							{data?.genres?.map(genre => genre?.name).join(', ')}
						</Typography>
						-
						<Typography
							variant='body1'
							component='h6'
							className='font-semibold'
						>
							{(data?.seasons?.[season]?.air_date as string).slice(0, 4)}
						</Typography>
						-
						<Typography
							variant='body1'
							component='h6'
							className='font-semibold'
						>
							{data?.seasons?.[season]?.episode_count} episodes
						</Typography>
					</>
				</Box>
			}
			crewData={
				<Box className='mt-4 flex flex-wrap gap-8'>
					<PersonAvatar
						data={director as Crew}
						title='Directed By'
						titleClassName='text-lg text-center'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>

					<PersonAvatar
						data={music as Crew}
						title='Music By'
						titleClassName='text-lg text-center'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>

					<PersonAvatar
						data={producers as Crew[]}
						title='Produced By'
						titleClassName='text-lg text-center'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>
				</Box>
			}
			castData={
				<Box className='mt-4 flex flex-wrap gap-8'>
					<PersonAvatar
						data={cast.slice(0, 6) as Crew[]}
						title='Cast'
						titleClassName='text-lg'
						valueClassName='text-sm'
						horizontalAlign='start'
						isCast
					/>
				</Box>
			}
		/>
	);
};

export default SingleSerieCard;
