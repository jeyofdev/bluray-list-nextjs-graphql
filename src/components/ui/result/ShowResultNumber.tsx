import InfoIcon from '@mui/icons-material/Info';
import { Alert, Typography } from '@mui/material';

type ShowResultsNumberPropsType = {
	totalResults: number;
	severity: 'error' | 'success' | 'info';
};
const ShowResultsNumber = ({
	totalResults,
	severity,
}: ShowResultsNumberPropsType) => {
	const alertInfoIconColor = () => {
		if (severity === 'success') {
			return 'text-green-700';
		} else if (severity === 'error') {
			return 'text-red-700';
		} else if (severity === 'info') {
			return 'text-sky-700';
		}
	};

	const alertTypographyColor = () => {
		if (severity === 'success') {
			return 'text-green-700';
		} else if (severity === 'error') {
			return 'text-red-700';
		} else if (severity === 'info') {
			return 'text-sky-700';
		}
	};

	const getWordingResults = () => {
		return totalResults === 1
			? `${totalResults} result found`
			: `${totalResults} results found`;
	};

	return (
		<>
			{totalResults && totalResults > 0 ? (
				<Typography
					variant='h6'
					component='h5'
					className='mb-3 text-primary-400'
				>
					{getWordingResults()}
				</Typography>
			) : (
				<Alert
					icon={
						<InfoIcon
							fontSize='inherit'
							className={`text-2xl ${alertInfoIconColor()}`}
						/>
					}
					severity={severity}
					className='mb-3'
				>
					<Typography
						variant='h6'
						component='h5'
						className={`text-lg ${alertTypographyColor()}`}
					>
						No results found
					</Typography>
				</Alert>
			)}
		</>
	);
};

export default ShowResultsNumber;
