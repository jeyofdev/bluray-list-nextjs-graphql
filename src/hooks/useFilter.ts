import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useReducer,
	useState,
} from 'react';
import { FiltersType, ItemResponseType } from '../types';
import { Genre } from '@graphql/__generated__/graphql-type';
import { TypeEnum } from '@enums/index';
import {
	convertToObjectWithValueFalse,
	generateObjectFromArrayOfString,
	oneObjectKeyHasTrueValue,
} from '@utils/index';
import filterReducer from '@reducers/filterReducer';
import {
	getAllItems,
	getItemsFilteredByGenre,
	getItemsFilteredByGenreAndYear,
	getItemsFilteredByYear,
} from '../actions/filtersAction';

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

	const [itemsFiltered, dispatch] = useReducer(filterReducer, dataItem);

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
			years = items
				.filter(i => i?.details?.seasons[i?.season]?.air_date)
				.map(m => {
					return m?.details?.seasons[m?.season]?.air_date?.slice(
						0,
						4,
					) as string;
				});
		}

		return Array.from(new Set(years));
	}, [items, type]);

	useEffect(() => {
		const genres = convertToObjectWithValueFalse(getGenresByItems());
		const years = convertToObjectWithValueFalse(getYearByItem());

		setFilters({ genres, years });
	}, [getGenresByItems, getYearByItem, items, setFilters]);

	useEffect(() => {
		const genreFilterIsActive = oneObjectKeyHasTrueValue(filters?.genres);
		const yearFilterIsActive = oneObjectKeyHasTrueValue(filters?.years);

		if (genreFilterIsActive || yearFilterIsActive) {
			const genreFilters = generateObjectFromArrayOfString(filters?.genres);
			const yearFilters = generateObjectFromArrayOfString(filters?.years);

			const itemFilterByGenre = items?.filter(m => {
				const movieGenres = m?.details?.genres?.map(
					(genre: Genre) => genre?.name,
				);
				return movieGenres?.some((v: string) => genreFilters.includes(v));
			});

			const itemFilterByYear = items?.filter(m => {
				if (type === TypeEnum.MOVIE) {
					return yearFilters.includes(
						m?.details?.release_date?.slice(0, 4) as string,
					);
				} else if (type === TypeEnum.SERIE) {
					return yearFilters.includes(
						m?.details?.seasons[m?.season]?.air_date?.slice(0, 4) as string,
					);
				}
			});

			if (genreFilterIsActive && !yearFilterIsActive) {
				dispatch(getItemsFilteredByGenre({ items: itemFilterByGenre }));
			} else if (!genreFilterIsActive && yearFilterIsActive) {
				dispatch(getItemsFilteredByYear({ items: itemFilterByYear }));
			} else if (genreFilterIsActive && yearFilterIsActive) {
				dispatch(
					getItemsFilteredByGenreAndYear({
						items: itemFilterByGenre,
						yearFilters,
						type,
					}),
				);
			}
		} else {
			dispatch(getAllItems({ items: dataItem }));
		}
	}, [dataItem, filters, items, type]);

	return {
		filters,
		setFilters,
		itemsFiltered: itemsFiltered as ItemResponseType,
		getGenresByItems,
		getYearByItem,
	};
};

export default useFilter;
