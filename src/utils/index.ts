import { SortEnum } from '@enums/index';
import { format } from 'date-fns';

/**
 * Format number to hours and minutes
 */
export const formatNumberToHours = (totalMinutes: number): string => {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	if (minutes === 0) {
		return `${hours}h`;
	}

	if (minutes < 10) {
		return `${hours}h ${`0${minutes}`}min`;
	}

	return `${hours}h ${minutes}min`;
};

/**
 * Format date to default format
 */
export const formatDate = (date: string) => {
	const newDate = new Date(date);
	return format(newDate, 'MMMM dd, yyyy');
};

/**
 * Calcul the rating
 */
export const getRating = (rating: number, precision?: number) => {
	return !precision ? Math.round(rating / 2) : rating / 2;
};

export const truncate = (text: string, limit: number) => {
	return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

/**
 * Convert array value to object in format { key: false }
 */
export const convertToObjectWithValueFalse = (arr: string[]) => {
	return arr.reduce(
		(accumulator, currentValue) => ({
			...accumulator,
			[currentValue]: false,
		}),
		{},
	);
};

/**
 * Get new custom Date
 */
export const getNewDate = (date: string) => {
	const [year, month, day, hour, minute] = date.split(/-|:|[A-Za-z]/);

	return new Date(
		Number(year),
		Number(month) - 1,
		Number(day),
		Number(hour),
		Number(minute),
	);
};

/**
 * Sort items of array by order asc or desc
 */
export const sortingByOrder = (a: any, b: any, order: SortEnum) => {
	if (order === SortEnum.ASC) {
		return a - b;
	}

	return b - a;
};

/**
 * sort string or date of array by order
 */
export const sortArrayByOrder = (
	a: string,
	b: string,
	order: SortEnum,
	type: 'string' | 'date',
) => {
	if (type === 'string') {
		return order === SortEnum.ASC ? a.localeCompare(b) : b.localeCompare(a);
	}

	const dateA = getNewDate(a);
	const dateB = getNewDate(b);

	return sortingByOrder(dateA.getTime(), dateB.getTime(), order);
};
