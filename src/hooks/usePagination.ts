import { ChangeEvent, useState } from 'react';
import { PaginationHandleChangeCurrentPage } from '../types';

type UsePaginationType = {
	currentPage: number;
	handleChangeCurrentPage: PaginationHandleChangeCurrentPage;
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
