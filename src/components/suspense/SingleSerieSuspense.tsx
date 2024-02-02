import SingleSerieCard from '@components/cards/SingleSerieCard';
import ContentContainer from '@components/containers/ContentContainer';
import {
	Cast,
	Crew,
	SerieDetails,
	SerieResponse,
	useSerieCreditsSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import { SupportType } from '../../types';

type SingleSerieSuspensePropsType = {
	data: SerieResponse;
};

const SingleSerieSuspense = ({ data }: SingleSerieSuspensePropsType) => {
	const { data: credits } = useSerieCreditsSuspenseQuery({
		variables: { serieId: data?.details?.id },
	});

	return (
		<ContentContainer
			imageSrc={data?.details?.backdrop_path as string}
			title={data?.details?.name as string}
		>
			<SingleSerieCard
				data={data?.details as SerieDetails}
				season={data?.season as number}
				supports={data?.support as SupportType}
				cast={credits?.serieCredits?.cast as Cast[]}
				crew={credits?.serieCredits?.crew as Crew[]}
			/>
		</ContentContainer>
	);
};

export default SingleSerieSuspense;
