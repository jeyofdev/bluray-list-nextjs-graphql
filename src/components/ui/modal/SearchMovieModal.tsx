import Modal, { SearchModalPropsType } from '@components/ui/modal/Modal';
import { useState } from 'react';

type SearchMovieModal = Pick<SearchModalPropsType, 'open' | 'onClose'>;

const SearchMovieModal = ({ open, onClose }: SearchMovieModal) => {
	const [search, setSearch] = useState<string>('');

	return (
		<Modal
			open={open}
			onClose={onClose}
			title='Search movie'
			search={search}
			setSearch={setSearch}
		/>
	);
};

export default SearchMovieModal;
