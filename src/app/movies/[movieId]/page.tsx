'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleMovieCard from '@components/cards/SingleMovieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	MovieDetails,
	MoviesQueryVariables,
	useMovieSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { Suspense } from 'react';
import { SupportType } from '../../../types';

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
				<Suspense fallback={<h1>load</h1>}>
					<SingleMovieCard
						data={data?.movie?.details as MovieDetails}
						supports={data?.movie?.support as SupportType}
					/>
				</Suspense>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
