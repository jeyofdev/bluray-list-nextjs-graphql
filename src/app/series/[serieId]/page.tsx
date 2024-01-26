'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleSerieCard from '@components/cards/SingleSerieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	MoviesQueryVariables,
	SerieDetails,
	useSerieSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { Suspense } from 'react';
import { SupportType } from '../../../types';

type SingleMoviePageProps = {
	params: MoviesQueryVariables;
};

const SingleMoviePage = ({ params }: SingleMoviePageProps) => {
	const { data, error } = useSerieSuspenseQuery({
		variables: { serieId: params.serieId },
	});

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Suspense fallback={<h1>load</h1>}>
					<SingleSerieCard
						data={data?.serie?.details as SerieDetails}
						supports={data?.serie?.support as SupportType}
						season={data?.serie?.season as number}
					/>
				</Suspense>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
