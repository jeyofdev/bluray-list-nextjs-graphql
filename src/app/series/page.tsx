'use client';

import ContentContainer from '@components/containers/ContentContainer';
import { Button, Typography, useTheme } from '@mui/material';

const SeriesPage = () => {
	const theme = useTheme();

	return (
		<ContentContainer>
			<Typography
				variant='h4'
				className='text-center text-5xl font-bold md:text-6xl'
			>
				Series
			</Typography>

			<Button
				variant='contained'
				color='success'
				// sx={{
				// 	backgroundColor: theme.palette.info.light,
				// 	color: theme.palette.info.contrastText
				// }}
			>
				ok
			</Button>
		</ContentContainer>
	);
};

export default SeriesPage;
