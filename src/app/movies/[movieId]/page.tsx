'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleMovieSuspense from '@components/suspense/SingleMovieSuspense';
import {
	MovieResponse,
	MoviesQueryVariables,
	useMovieSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import Loading from '@routes/loading';
import { Suspense } from 'react';

type SingleMoviePageProps = {
	params: MoviesQueryVariables;
};

const SingleMoviePage = ({ params }: SingleMoviePageProps) => {
	const { movieId } = params;

	const { data } = useMovieSuspenseQuery({
		variables: { movieId },
	});

	return (
		<NoSSRWrapper>
			<Suspense fallback={<Loading label='loading movies...' />}>
				<SingleMovieSuspense data={data?.movie as MovieResponse} />
			</Suspense>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
