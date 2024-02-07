import { FilterPayload } from '@reducers/filterReducer';

export const FilterTypesActions = {
	ONLY_GENRE_FILTER_ACTIVE: 'ONLY_GENRE_FILTER_ACTIVE',
	ONLY_YEAR_FILTER_ACTIVE: 'ONLY_YEAR_FILTER_ACTIVE',
	GENRE_AND_YEAR_FILTER_ACTIVE: 'GENRE_AND_YEAR_FILTER_ACTIVE',
	NO_FILTER_ACTIVE: 'NO_FILTER_ACTIVE',
};

export const getItemsFilteredByGenre = (
	payload: Pick<FilterPayload, 'items'>,
) => ({
	type: FilterTypesActions.ONLY_GENRE_FILTER_ACTIVE,
	payload,
});

export const getItemsFilteredByYear = (
	payload: Pick<FilterPayload, 'items'>,
) => ({
	type: FilterTypesActions.ONLY_YEAR_FILTER_ACTIVE,
	payload,
});

export const getItemsFilteredByGenreAndYear = (
	payload: Pick<FilterPayload, 'items' | 'yearFilters' | 'type'>,
) => ({
	type: FilterTypesActions.GENRE_AND_YEAR_FILTER_ACTIVE,
	payload,
});

export const getAllItems = (payload: Pick<FilterPayload, 'items'>) => ({
	type: FilterTypesActions.NO_FILTER_ACTIVE,
	payload,
});
