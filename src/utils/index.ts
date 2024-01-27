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