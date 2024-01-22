import { Dispatch, SetStateAction, useState } from 'react';

type UseSearchType = {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
};

const useSearch = (): UseSearchType => {
	const [search, setSearch] = useState<string>('');
	const [searchQuery, setSearchQuery] = useState<string>('');

	return { search, setSearch, searchQuery, setSearchQuery };
};

export default useSearch;
