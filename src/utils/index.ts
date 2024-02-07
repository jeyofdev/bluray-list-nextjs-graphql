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

/**
 * truncate text by limit
 */
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
 * Sort two date by order asc or desc
 */
export const sortingDateByOrder = (a: Date, b: Date, order: SortEnum) => {
	const dateA = a.getTime();
	const dateB = b.getTime();

	if (order === SortEnum.ASC) {
		return dateA - dateB;
	}

	return dateB - dateA;
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

	return sortingDateByOrder(getNewDate(a), getNewDate(b), order);
};

/**
 * Check that at least one key of an object is true
 */
export const oneObjectKeyHasTrueValue = (filter: object) => {
	return Object.values(filter).some(item => item === true);
};

/**
 * Generate an object whose values ​​are true and keys generated from a string array
 */
export const generateObjectFromArrayOfString = (filter: object) => {
	return Object.keys(filter).filter(
		el => filter[el as keyof typeof filter] === true,
	);
};
