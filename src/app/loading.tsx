'use client';

import Loader from '@components/ui/loader/Loader';
import { Box, Typography } from '@mui/material';

type LoadingPropsType = {
	label: string;
};
const Loading = ({ label }: LoadingPropsType) => {
	return (
		<Box className='flex flex-col items-center justify-center'>
			<Loader />
			<Typography variant='h6'>{label}</Typography>
		</Box>
	);
};

export default Loading;
