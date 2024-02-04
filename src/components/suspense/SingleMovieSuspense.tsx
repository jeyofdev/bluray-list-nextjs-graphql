import SingleMovieCard from '@components/cards/SingleMovieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	Cast,
	Crew,
	MovieDetails,
	MovieResponse,
	useMovieCreditsQuery,
} from '@graphql/__generated__/graphql-type';
import { SupportType } from '../../types';

type SingleMovieSuspensePropsType = {
	data: MovieResponse;
};

const SingleMovieSuspense = ({ data }: SingleMovieSuspensePropsType) => {
	const { data: credits } = useMovieCreditsQuery({
		variables: { movieId: data?.details?.id },
	});

	return (
		<>
			{data ? (
				<ContentContainer
					imageSrc={data?.details?.backdrop_path as string}
					title={data?.details?.title as string}
				>
					<SingleMovieCard
						data={data?.details as MovieDetails}
						supports={data?.support as SupportType}
						cast={credits ? (credits?.movieCredits?.cast as Cast[]) : []}
						crew={credits ? (credits?.movieCredits?.crew as Crew[]) : []}
					/>
				</ContentContainer>
			) : null}
		</>
	);
};

export default SingleMovieSuspense;
