'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleSerieSuspense from '@components/suspense/SingleSerieSuspense';
import {
	MoviesQueryVariables,
	SerieResponse,
	useSerieQuery,
} from '@graphql/__generated__/graphql-type';
import Loading from '@routes/loading';
import PageNotFound from '@routes/not-found';
import { Suspense } from 'react';

type SingleMoviePageProps = {
	params: MoviesQueryVariables;
};

const SingleMoviePage = ({ params }: SingleMoviePageProps) => {
	const { serieId } = params;

	const { data, error } = useSerieQuery({
		variables: { serieId },
	});

	if (error) {
		return <PageNotFound />;
	}

	return (
		<NoSSRWrapper>
			<Suspense fallback={<Loading label='loading series...' />}>
				<SingleSerieSuspense data={data?.serie as SerieResponse} />
			</Suspense>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
