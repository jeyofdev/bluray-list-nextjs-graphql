import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { FiltersType } from '../types';
import { MovieResponse } from '@graphql/__generated__/graphql-type';

type UseFilterType = {
	filters: FiltersType;
	setFilters: Dispatch<SetStateAction<FiltersType>>;
	items: MovieResponse[];
	itemsFiltered: MovieResponse[];
	getGenresByItems: () => string[];
	getYearByItem: () => string[];
};

const useFilter = (dataItem: MovieResponse[]): UseFilterType => {
	const [filters, setFilters] = useState<FiltersType>({
		genres: {},
		years: [],
	});

	const [items, setItems] = useState<MovieResponse[]>(dataItem);

	const [itemsFiltered, setItemsFiltered] = useState<MovieResponse[]>(dataItem);

	const getGenresByItems = useCallback(() => {
		const genresByItem = items
			?.map(movie =>
				movie?.details?.genres?.map(genre => genre?.name)?.join(','),
			)
			.join(',')
			.split(',');

		return Array.from(new Set(genresByItem));
	}, [items]);

	const getYearByItem = useCallback(() => {
		const years = items.map(
			m => m?.details?.release_date?.slice(0, 4) as string,
		);

		return Array.from(new Set(years));
	}, [items]);

	const setDataInObject = (itemsData: () => string[]) => {
		return itemsData().reduce(
			(accumulator, currentValue) => ({
				...accumulator,
				[currentValue]: false,
			}),
			{},
		);
	};

	const checkIfItemFilterIsActive = (filter: object) => {
		return Object.values(filter).some(item => item === true);
	};

	const getFilters = (filter: object) => {
		return Object.keys(filter).filter(
			el => filter[el as keyof typeof filter] === true,
		);
	};

	useEffect(() => {
		const genres = setDataInObject(getGenresByItems);
		const years = setDataInObject(getYearByItem);

		setFilters({ genres, years });
	}, [getGenresByItems, getYearByItem, items, setFilters]);

	useEffect(() => {
		const genreFilterIsActive = checkIfItemFilterIsActive(filters?.genres);
		const yearFilterIsActive = checkIfItemFilterIsActive(filters?.years);

		if (genreFilterIsActive || yearFilterIsActive) {
			const genreFilters = getFilters(filters?.genres);
			const yearFilters = getFilters(filters?.years);

			const itemFilterByGenre = items?.filter(m => {
				const movieGenres = m?.details?.genres?.map(genre => genre?.name);
				return movieGenres?.some(v => genreFilters.includes(v as string));
			});

			const itemFilterByYear = items?.filter(m => {
				return yearFilters.includes(
					m?.details?.release_date?.slice(0, 4) as string,
				);
			});

			if (genreFilterIsActive && !yearFilterIsActive) {
				setItemsFiltered(itemFilterByGenre);
			} else if (!genreFilterIsActive && yearFilterIsActive) {
				setItemsFiltered(itemFilterByYear);
			} else if (genreFilterIsActive && yearFilterIsActive) {
				setItemsFiltered(
					itemFilterByGenre?.filter(m => {
						return yearFilters.includes(
							m?.details?.release_date?.slice(0, 4) as string,
						);
					}),
				);
			}
		} else {
			setItemsFiltered(items);
		}
	}, [filters, items]);

	return {
		filters,
		setFilters,
		items,
		itemsFiltered,
		getGenresByItems,
		getYearByItem,
	};
};

export default useFilter;
