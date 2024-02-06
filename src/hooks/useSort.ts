import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SortType } from '../types';
import { SortEnum } from '@enums/index';
import { sortArrayByOrder } from '@utils/index';

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

	useEffect(() => {
		setSortItems(
			items
				.map((e: any) => ({
					...e,
					created_at: e.created_at.toString(),
				}))
				.sort((a: any, b: any) => {
					if (sorts.name === 'createdAt') {
						return sortArrayByOrder(
							a.created_at,
							b.created_at,
							sorts?.order,
							'date',
						);
					} else if (sorts.name === 'title') {
						return sortArrayByOrder(
							a.details?.title,
							b.details?.title,
							sorts.order,
							'string',
						);
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
