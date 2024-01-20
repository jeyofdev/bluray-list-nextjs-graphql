import { ChangeEvent, useState } from 'react';

type UsePaginationType = {
	currentPage: number;
	handleChangeCurrentPage: (_: ChangeEvent<unknown>, value: number) => void;
	resetCurrentPage: () => void;
};

const usePagination = (): UsePaginationType => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleChangeCurrentPage = (_: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
	};

	const resetCurrentPage = () => {
		setCurrentPage(1);
	};

	return { currentPage, handleChangeCurrentPage, resetCurrentPage };
};

export default usePagination;
