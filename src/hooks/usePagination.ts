import { ChangeEvent, useState } from 'react';

type UsePaginationType = {
	currentPage: number;
	handleChangeCurrentPage: (_: ChangeEvent<unknown>, value: number) => void;
};

const usePagination = (): UsePaginationType => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleChangeCurrentPage = (_: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
	};

	return { currentPage, handleChangeCurrentPage };
};

export default usePagination;
