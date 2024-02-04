import SingleSerieCard from '@components/cards/SingleSerieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	Cast,
	Crew,
	SerieDetails,
	SerieResponse,
	useSerieCreditsQuery,
} from '@graphql/__generated__/graphql-type';
import { SupportType } from '../../types';

type SingleSerieSuspensePropsType = {
	data: SerieResponse;
};

const SingleSerieSuspense = ({ data }: SingleSerieSuspensePropsType) => {
	const { data: credits } = useSerieCreditsQuery({
		variables: { serieId: data?.details?.id },
	});

	return (
		<>
			{data ? (
				<ContentContainer
					imageSrc={data?.details?.backdrop_path as string}
					title={data?.details?.name as string}
				>
					<SingleSerieCard
						data={data?.details as SerieDetails}
						season={data?.season as number}
						supports={data?.support as SupportType}
						cast={credits ? (credits?.serieCredits?.cast as Cast[]) : []}
						crew={credits ? (credits?.serieCredits?.crew as Crew[]) : []}
					/>
				</ContentContainer>
			) : null}
		</>
	);
};

export default SingleSerieSuspense;
