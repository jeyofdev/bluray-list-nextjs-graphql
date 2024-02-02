import SingleMovieCard from '@components/cards/SingleMovieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	Cast,
	Crew,
	MovieDetails,
	MovieResponse,
	useMovieCreditsSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { SupportType } from '../../types';

type SingleMovieSuspensePropsType = {
	data: MovieResponse;
};

const SingleMovieSuspense = ({ data }: SingleMovieSuspensePropsType) => {
	const { data: credits } = useMovieCreditsSuspenseQuery({
		variables: { movieId: data?.details?.id },
	});

	return (
		<ContentContainer
			imageSrc={data?.details?.backdrop_path as string}
			title={data?.details?.title as string}
		>
			<SingleMovieCard
				data={data?.details as MovieDetails}
				supports={data?.support as SupportType}
				cast={credits?.movieCredits?.cast as Cast[]}
				crew={credits?.movieCredits?.crew as Crew[]}
			/>
		</ContentContainer>
	);
};

export default SingleMovieSuspense;
