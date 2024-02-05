import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SortType } from '../types';
import { SortEnum } from '@enums/index';

type UseSortType = {
	sorts: SortType;
	setSorts: Dispatch<SetStateAction<SortType>>;
	sortItems: any;
};

const useSort = (items: any): UseSortType => {
	const [sortItems, setSortItems] = useState(items);

	const [sorts, setSorts] = useState<SortType>({
		createdAt: {
			label: 'By date',
			value: SortEnum.ASC,
		},
	});

	const getNewDate = (date: string) => {
		const [year, month, day, hour, minute] = date.split(/-|:|[A-Za-z]/);

		return new Date(
			Number(year),
			Number(month) - 1,
			Number(day),
			Number(hour),
			Number(minute),
		);
	};

	const sortByDate = (a: any, b: any, sort: SortEnum) => {
		if (sort === SortEnum.ASC) {
			return a.getTime() - b.getTime();
		}

		return b.getTime() - a.getTime();
	};

	useEffect(() => {
		setSortItems(
			items
				.map((e: any) => ({
					...e,
					created_at: e.created_at.toString(),
				}))
				.sort((a: any, b: any) => {
					const dateA = getNewDate(a.created_at);
					const dateB = getNewDate(b.created_at);

					return sortByDate(dateA, dateB, sorts?.createdAt.value);
				}),
		);
	}, [items, sorts]);

	return {
		sorts,
		setSorts,
		sortItems,
	};
};

export default useSort;
