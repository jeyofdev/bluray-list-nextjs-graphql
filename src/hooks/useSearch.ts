import { Dispatch, SetStateAction, useState } from 'react';

type UseSearchType = {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
	showSearchModal: boolean;
	onOpenSearchModal: () => void;
	onCloseSearchModal: () => void;
};

const useSearch = (): UseSearchType => {
	const [showSearchModal, setshowSearchModal] = useState<boolean>(false);

	const [search, setSearch] = useState<string>('');
	const [searchQuery, setSearchQuery] = useState<string>('');

	const onOpenSearchModal = () => {
		setshowSearchModal(true);
	};

	const onCloseSearchModal = () => {
		setshowSearchModal(false);
	};

	return {
		search,
		setSearch,
		searchQuery,
		setSearchQuery,
		showSearchModal,
		onOpenSearchModal,
		onCloseSearchModal,
	};
};

export default useSearch;
