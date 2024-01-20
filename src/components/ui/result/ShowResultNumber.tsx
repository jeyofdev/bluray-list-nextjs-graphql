import InfoIcon from '@mui/icons-material/Info';
import { Alert, Typography } from '@mui/material';

type ShowResultsNumberPropsType = {
	totalResults: number;
};
const ShowResultsNumber = ({ totalResults }: ShowResultsNumberPropsType) => {
	return (
		<>
			{totalResults && totalResults > 0 ? (
				<Typography variant='h6' component='h5' className='mb-3 text-gray-400'>
					{totalResults} results found
				</Typography>
			) : (
				<Alert
					icon={
						<InfoIcon fontSize='inherit' className='text-2xl text-red-700' />
					}
					severity='error'
					className='mb-3'
				>
					<Typography
						variant='h6'
						component='h5'
						className='text-lg text-red-700'
					>
						No results found
					</Typography>
				</Alert>
			)}
		</>
	);
};

export default ShowResultsNumber;
