import { useEffect, useState } from 'react';

type ItemResponseType = any[];

type UseSortType = {
	sortItems: ItemResponseType;
};

const useSort = (items: any): UseSortType => {
	const [sortItems, setSortItems] = useState(items);

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

					return dateB.getTime() - dateA.getTime();
				}),
		);
	}, [items]);

	return {
		sortItems,
	};
};

export default useSort;
