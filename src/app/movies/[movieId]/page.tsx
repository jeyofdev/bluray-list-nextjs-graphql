'use client';

import NoSSRWrapper from '@components/NoSSRWrapper';
import SingleMovieCard from '@components/cards/SingleMovieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	Cast,
	Crew,
	MovieDetails,
	MoviesQueryVariables,
	useMovieCreditsSuspenseQuery,
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

	const { data: movieCredits } = useMovieCreditsSuspenseQuery({
		variables: { movieId: data?.movie?.details?.id },
	});

	return (
		<NoSSRWrapper>
			<Suspense fallback={<h1>load</h1>}>
				<ContentContainer
					imageSrc={data?.movie?.details?.backdrop_path as string}
					title={data?.movie?.details?.title as string}
				>
					<SingleMovieCard
						data={data?.movie?.details as MovieDetails}
						supports={data?.movie?.support as SupportType}
						cast={movieCredits?.movieCredits?.cast as Cast[]}
						crew={movieCredits?.movieCredits?.crew as Crew[]}
					/>
				</ContentContainer>
			</Suspense>
		</NoSSRWrapper>
	);
};

export default SingleMoviePage;
