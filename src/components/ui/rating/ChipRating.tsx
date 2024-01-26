import { Chip, Rating } from '@mui/material';
import { getRating } from '@utils/index';

type ChipRatingPropsType = {
	rating: number;
	precision?: number;
};

export const ChipRating = ({ rating, precision }: ChipRatingPropsType) => {
	return (
		<Chip
			label={
				<Rating
					value={getRating(rating, precision)}
					precision={precision}
					readOnly
					classes={{
						icon: 'mt-1 text-yellow-300 text-xl',
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
