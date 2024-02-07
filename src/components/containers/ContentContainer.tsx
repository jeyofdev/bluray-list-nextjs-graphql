'use client';

import { Box, CardMedia, Container, Paper } from '@mui/material';
import { ChildrenType } from '../../types';

type ContentContainerType = {
	children?: ChildrenType;
	imageSrc?: string;
	title?: string;
};

const ContentContainer = ({
	children,
	imageSrc,
	title,
}: ContentContainerType) => {
	return (
		<Box className='relative'>
			<Paper
				elevation={0}
				className={`w-full bg-primary-300 ${!imageSrc ? 'h-[100px]' : 'h-auto'}`}
			>
				{imageSrc && title ? (
					<CardMedia
						image={`https://image.tmdb.org/t/p/original${imageSrc}`}
						title={title}
						className='h-[80vh] bg-cover bg-top sm:h-[60vh] md:h-[70vh] lg:h-[100vh]'
					/>
				) : null}
			</Paper>
			<Container
				maxWidth='lg'
				classes={{
					root: 'pb-8 absolute left-1/2 top-[75%] sm:top-[70%] md:top-[70%] lg:top-[65%] xl:top-[65%] -translate-x-1/2',
				}}
			>
				<Paper
					elevation={0}
					className='mb-10 rounded-md p-4 md:p-5 lg:p-6 xl:p-8'
				>
					{children}
				</Paper>
			</Container>
		</Box>
	);
};

export default ContentContainer;
