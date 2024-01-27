import { ContentItem } from '@components/ui/content/ContentItem';
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
	)?.name;

	const music = () => {
		const musicCrew = crew.filter(
			item => item.job === 'Music' || item.job === 'Original Music Composer',
		);

		return musicCrew[0]?.name;
	};

	const producers = crew
		.filter(item => item.job === 'Producer')
		.map(producer => producer.name)
		.join(', ');

	const actors = cast
		.slice(0, 10)
		.map(actor => actor.name)
		.join(', ');

	return (
		<SingleCard
			title={data?.title as string}
			originalTitle={data?.original_title as string}
			overview={data?.overview as string}
			posterPath={data?.poster_path as string}
			rating={data?.vote_average as number}
			cast={cast}
			crew={crew}
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
				<Box className='mt-4 flex flex-wrap gap-4'>
					<ContentItem
						title='Directed By'
						value={director as string}
						titleClassName='text-lg'
						valueClassName='text-base'
					/>

					<ContentItem
						title='Music By'
						value={music() as string}
						titleClassName='text-lg'
						valueClassName='text-base'
					/>

					<ContentItem
						title='Produced By'
						value={producers as string}
						titleClassName='text-lg'
						valueClassName='text-base'
					/>

					<ContentItem
						title='Cast'
						value={actors as string}
						titleClassName='text-lg'
						valueClassName='text-base'
					/>
				</Box>
			}
		/>
	);
};

export default SingleMovieCard;
