import SearchCard from '@components/cards/SearchCard';
import { TypeEnum } from '@enums/index';
import {
	Season,
	SerieDetails,
	useSeasonsBySerieSuspenseQuery,
} from '@graphql/__generated__/graphql-type';
import useSupport from '@hooks/useSupport';
import { useState } from 'react';

type SearchSerieCardProps = {
	serie: SerieDetails;
	addSerie?: any;
	refetch: any;
	onClose: () => void;
};

const SearchSerieCard = ({
	serie,
	addSerie,
	refetch,
	onClose,
}: SearchSerieCardProps) => {
	const { data: seasons } = useSeasonsBySerieSuspenseQuery({
		variables: { tmdbSerieId: serie?.id },
		fetchPolicy: 'cache-and-network',
	});

	const {
		itemSupports,
		onChange: handleChangeItemSupports,
		cheKIfOneSupportIsActive,
	} = useSupport();

	const [selectedSeason, setSelectedSeason] = useState<string>('1');

	const handleClick = () => {
		addSerie({
			variables: {
				tmdbSerieId: serie.id,
				season: Number(selectedSeason),
				support: itemSupports,
			},
			onCompleted: refetch,
		});

		onClose();
	};

	return (
		<SearchCard
			type={TypeEnum.SERIE}
			title={serie?.name as string}
			posterPath={serie?.poster_path as string}
			seasons={seasons?.seasonsBySerie?.seasons as Season[]}
			selectedSeason={selectedSeason}
			setSelectedSeason={setSelectedSeason}
			addButtonLabel='Add to list'
			onClick={handleClick}
			onChangeItemSupports={handleChangeItemSupports}
			addButtonIsDisabled={!cheKIfOneSupportIsActive()}
		/>
	);
};

export default SearchSerieCard;
