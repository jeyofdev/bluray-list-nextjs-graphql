import { MovieDetails } from '@graphql/__generated__/graphql-type';
import { Box, Typography } from '@mui/material';
import { SupportType } from '../../types';
import SingleCard from './SingleCard';

type SingleMovieCardPropsType = {
	data: MovieDetails;
	supports: SupportType;
};

export const SingleMovieCard = ({
	data,
	supports,
}: SingleMovieCardPropsType) => {
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
							{data?.release_date}
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
							{139}
						</Typography>
					</>
				</Box>
			}
		/>
	);
};

export default SingleMovieCard;
