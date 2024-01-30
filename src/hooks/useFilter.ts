import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { FiltersType } from '../types';
import { Genre } from '@graphql/__generated__/graphql-type';
import { TypeEnum } from '@enums/index';
import { convertToObjectWithValueFalse } from '@utils/index';

type ItemResponseType = any[];

type UseFilterType = {
	filters: FiltersType;
	setFilters: Dispatch<SetStateAction<FiltersType>>;
	itemsFiltered: ItemResponseType;
	getGenresByItems: () => string[];
	getYearByItem: () => string[];
};

const useFilter = (
	dataItem: ItemResponseType,
	type: TypeEnum,
): UseFilterType => {
	const [filters, setFilters] = useState<FiltersType>({
		genres: {},
		years: [],
	});

	const [items, setItems] = useState<ItemResponseType>(dataItem);

	const [itemsFiltered, setItemsFiltered] =
		useState<ItemResponseType>(dataItem);

	const getGenresByItems = useCallback(() => {
		const genresByItem = items
			?.map(movie =>
				movie?.details?.genres?.map((genre: Genre) => genre?.name)?.join(','),
			)
			.join(',')
			.split(',');

		return Array.from(new Set(genresByItem));
	}, [items]);

	const getYearByItem = useCallback(() => {
		let years: string[] = [];

		if (type === TypeEnum.MOVIE) {
			years = items.map(m => m?.details?.release_date?.slice(0, 4) as string);
		} else if (type === TypeEnum.SERIE) {
			years = items.map(m => {
				return m?.details?.seasons[m?.season]?.air_date?.slice(0, 4) as string;
			});
		}

		return Array.from(new Set(years));
	}, [items, type]);

	const checkIfItemFilterIsActive = (filter: object) => {
		return Object.values(filter).some(item => item === true);
	};

	const getFilters = (filter: object) => {
		return Object.keys(filter).filter(
			el => filter[el as keyof typeof filter] === true,
		);
	};

	useEffect(() => {
		const genres = convertToObjectWithValueFalse(getGenresByItems());
		const years = convertToObjectWithValueFalse(getYearByItem());

		setFilters({ genres, years });
	}, [getGenresByItems, getYearByItem, items, setFilters]);

	useEffect(() => {
		const genreFilterIsActive = checkIfItemFilterIsActive(filters?.genres);
		const yearFilterIsActive = checkIfItemFilterIsActive(filters?.years);

		if (genreFilterIsActive || yearFilterIsActive) {
			const genreFilters = getFilters(filters?.genres);
			const yearFilters = getFilters(filters?.years);

			const itemFilterByGenre = items?.filter(m => {
				const movieGenres = m?.details?.genres?.map(
					(genre: Genre) => genre?.name,
				);
				return movieGenres?.some((v: string) => genreFilters.includes(v));
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
						if (type === TypeEnum.MOVIE) {
							return yearFilters.includes(
								m?.details?.release_date?.slice(0, 4) as string,
							);
						} else if (type === TypeEnum.SERIE) {
							return yearFilters.includes(
								m?.details?.seasons[m?.season]?.air_date?.slice(0, 4) as string,
							);
						}
					}),
				);
			}
		} else {
			setItemsFiltered(items);
		}
	}, [filters, items, type]);

	return {
		filters,
		setFilters,
		itemsFiltered,
		getGenresByItems,
		getYearByItem,
	};
};

export default useFilter;
