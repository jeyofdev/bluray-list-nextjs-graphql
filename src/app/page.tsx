'use client';

import { Button, Typography } from '@mui/material';

const HomePage = () => {
	return (
		<>
			<h1 className='mt-4 text-center text-4xl'>Home</h1>
			<Typography variant='h1'>ok</Typography>
			<Button variant='contained' className='bg-red-500'>
				Hello world
			</Button>
		</>
	);
};

export default HomePage;
