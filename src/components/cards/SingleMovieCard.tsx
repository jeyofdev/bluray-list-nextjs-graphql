import PersonAvatar from '@components/ui/avatar/PersonAvatar';
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

	const producers = crew.filter(item => item.job === 'Producer').slice(0, 3);

	return (
		<SingleCard
			title={data?.title as string}
			originalTitle={data?.original_title as string}
			overview={data?.overview as string}
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
							{formatDate(data?.release_date as string)}
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
							{formatNumberToHours(data?.runtime as number)}
						</Typography>
					</>
				</Box>
			}
			crewData={
				<Box className='mt-4 flex flex-wrap gap-8'>
					<PersonAvatar
						data={director as Crew}
						title='Directed By'
						titleClassName='text-lg'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>

					<PersonAvatar
						data={music as Crew}
						title='Music By'
						titleClassName='text-lg'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>

					<PersonAvatar
						data={producers as Crew[]}
						title='Produced By'
						titleClassName='text-lg'
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

export default SingleMovieCard;