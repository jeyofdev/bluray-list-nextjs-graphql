import SearchCard from '@components/cards/SearchCard';
import { SerieDetails } from '@graphql/__generated__/graphql-type';
import useSupport from '@hooks/useSupport';

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
	const { itemSupports, onChange: handleChangeItemSupports } = useSupport();

	const handleClick = () => {
		addSerie({
			variables: {
				tmdbSerieId: serie.id,
				season: 1,
				support: itemSupports,
			},
			onCompleted: refetch,
		});

		onClose();
	};

	return (
		<SearchCard
			title={serie?.name as string}
			posterPath={serie?.poster_path as string}
			addButtonLabel='Add to list'
			onClick={handleClick}
			onChangeItemSupports={handleChangeItemSupports}
		/>
	);
};

export default SearchSerieCard;
