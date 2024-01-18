'use client';

import { useMoviesQuery } from '@graphql/__generated__/graphql-type';
import { Button, Typography } from '@mui/material';

const HomePage = () => {
	const { data } = useMoviesQuery();
	// eslint-disable-next-line no-console
	console.log(data, process.env.NEXT_PUBLIC_API_URL);

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
