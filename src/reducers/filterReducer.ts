import { TypeEnum } from '@enums/index';
import { ItemResponseType } from '../types';
import { FilterTypesActions } from '../actions/filtersAction';

type FilterStateType = ItemResponseType;

export type FilterPayload = {
	items?: ItemResponseType;
	type?: TypeEnum;
	yearFilters?: string[];
};

type FilterActionType = {
	type: any;
	payload?: FilterPayload;
};

export const initialState: FilterStateType = [];

const filterReducer = (state = initialState, action: FilterActionType) => {
	switch (action.type) {
		case FilterTypesActions.ONLY_GENRE_FILTER_ACTIVE:
			return action.payload?.items;

		case FilterTypesActions?.ONLY_YEAR_FILTER_ACTIVE:
			return action.payload?.items;

		case FilterTypesActions.GENRE_AND_YEAR_FILTER_ACTIVE:
			return action.payload?.items?.filter((m: any) => {
				if (action.payload?.type === TypeEnum.MOVIE) {
					return action.payload?.yearFilters?.includes(
						m?.details?.release_date?.slice(0, 4) as string,
					);
				} else if (action.payload?.type === TypeEnum.SERIE) {
					return action.payload?.yearFilters?.includes(
						m?.details?.seasons[m?.season]?.air_date?.slice(0, 4) as string,
					);
				}
			});

		case FilterTypesActions.NO_FILTER_ACTIVE:
			return action.payload?.items;

		default:
			return state;
	}
};

export default filterReducer;
