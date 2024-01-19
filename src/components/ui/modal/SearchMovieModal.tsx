import Modal, { SearchModalPropsType } from '@components/ui/modal/Modal';

type SearchMovieModal = Pick<SearchModalPropsType, 'open' | 'onClose'>;

const SearchMovieModal = ({ open, onClose }: SearchMovieModal) => {
	return <Modal open={open} onClose={onClose} title='Search movie' />;
};

export default SearchMovieModal;
