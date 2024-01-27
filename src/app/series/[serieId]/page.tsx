'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleSerieCard from '@components/cards/SingleSerieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	Cast,
	Crew,
	MoviesQueryVariables,
	SerieDetails,
	useSerieCreditsSuspenseQuery,
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

	const { data: serieCredits } = useSerieCreditsSuspenseQuery({
		variables: { serieId: data?.serie?.details?.id },
	});

	return (
		<NoSSRWrapper>
			<ContentContainer>
				<Suspense fallback={<h1>load</h1>}>
					<SingleSerieCard
						data={data?.serie?.details as SerieDetails}
						supports={data?.serie?.support as SupportType}
						season={data?.serie?.season as number}
						cast={serieCredits?.serieCredits?.cast as Cast[]}
						crew={serieCredits?.serieCredits?.crew as Crew[]}
					/>
				</Suspense>
			</ContentContainer>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
