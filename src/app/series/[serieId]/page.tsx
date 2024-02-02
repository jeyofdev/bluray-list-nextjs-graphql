'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleSerieSuspense from '@components/suspense/SingleSerieSuspense';
import {
	MoviesQueryVariables,
	SerieResponse,
	useSerieSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { Suspense } from 'react';

type SingleMoviePageProps = {
	params: MoviesQueryVariables;
};

const SingleMoviePage = ({ params }: SingleMoviePageProps) => {
	const { serieId } = params;

	const { data } = useSerieSuspenseQuery({
		variables: { serieId },
	});

	return (
		<NoSSRWrapper>
			<Suspense fallback={<div>loading...</div>}>
				<SingleSerieSuspense data={data?.serie as SerieResponse} />
			</Suspense>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
