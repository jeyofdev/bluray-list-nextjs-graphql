'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import ContentContainer from '@components/containers/ContentContainer';
import {
	MoviesQueryVariables,
	useMovieSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { Typography } from '@mui/material';

type SingleMoviePageProps = {
	params: MoviesQueryVariables;
};

const SingleMoviePage = ({ params }: SingleMoviePageProps) => {
	const { data, error } = useMovieSuspenseQuery({
		variables: { movieId: params.movieId },
	});

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Typography variant='h4' component='h1' className='mb-4 text-center'>
					{data.movie?.details?.title}
				</Typography>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
