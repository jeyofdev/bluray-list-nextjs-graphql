'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleMovieSuspense from '@components/suspense/SingleMovieSuspense';
import {
	MovieResponse,
	MoviesQueryVariables,
	useMovieSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
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
			<Suspense fallback={<h1>load</h1>}>
				<SingleMovieSuspense data={data?.movie as MovieResponse} />
			</Suspense>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
