import { Chip, Rating } from '@mui/material';

type ChipRatingPropsType = {
	rating: number;
	precision?: number | undefined;
};

export const ChipRating = ({ rating, precision }: ChipRatingPropsType) => {
	const getRating = (rating: number, precision?: number) => {
		return !precision ? Math.round(rating / 2) : rating / 2;
	};

	return (
		<Chip
			label={
				<Rating
					value={getRating(rating, precision)}
					precision={precision}
					readOnly
					classes={{
						icon: 'text-yellow-300 text-xl',
					}}
				/>
			}
			classes={{
				root: 'bg-primary-900 border-2 border-solid border-primary-50',
			}}
		/>
	);
};

export default ChipRating;
