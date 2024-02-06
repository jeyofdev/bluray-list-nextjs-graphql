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
		name: 'createdAt',
		order: SortEnum.ASC,
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

	const sorting = (a: any, b: any, sort: SortEnum) => {
		if (sort === SortEnum.ASC) {
			return a - b;
		}

		return b - a;
	};

	useEffect(() => {
		setSortItems(
			items
				.map((e: any) => ({
					...e,
					created_at: e.created_at.toString(),
				}))
				.sort((a: any, b: any) => {
					if (sorts.name === 'createdAt') {
						const dateA = getNewDate(a.created_at);
						const dateB = getNewDate(b.created_at);

						return sorting(dateA.getTime(), dateB.getTime(), sorts?.order);
					} else if (sorts.name === 'title') {
						return sorts?.order === SortEnum.ASC
							? a.details?.title.localeCompare(b.details?.title)
							: b.details?.title.localeCompare(a.details?.title);
					}
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
