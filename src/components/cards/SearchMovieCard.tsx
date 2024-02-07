import SearchCard from '@components/cards/SearchCard';
import { TypeEnum } from '@enums/index';
import { MovieDetails } from '@graphql/__generated__/graphql-type';
import useSupport from '@hooks/useSupport';

type SearchMovieCardProps = {
	movie: MovieDetails;
	addMovie?: any;
	refetch: any;
	onClose: () => void;
};

const SearchMovieCard = ({
	movie,
	addMovie,
	refetch,
	onClose,
}: SearchMovieCardProps) => {
	const {
		itemSupports,
		onChange: handleChangeItemSupports,
		cheKIfOneSupportIsActive,
	} = useSupport();

	const handleClick = () => {
		addMovie({
			variables: {
				tmdbMovieId: movie.id,
				support: itemSupports,
			},
			onCompleted: refetch,
		});

		onClose();
	};

	return (
		<SearchCard
			type={TypeEnum.MOVIE}
			title={movie?.title as string}
			posterPath={movie?.poster_path as string}
			rating={movie?.vote_average as number}
			addButtonLabel='Add to list'
			onClick={handleClick}
			onChangeItemSupports={handleChangeItemSupports}
			addButtonIsDisabled={!cheKIfOneSupportIsActive()}
		/>
	);
};

export default SearchMovieCard;
