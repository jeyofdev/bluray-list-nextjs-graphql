import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import ChipRating from '@components/ui/rating/ChipRating';
import { Box, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { SupportType } from '../../types';

type SingleCardPropsType = {
	title: string;
	originalTitle: string;
	overview: string;
	posterPath: string;
	rating: number;
	supports: SupportType;
	subtitle?: ReactNode;
};

export const SingleCard = ({
	title,
	originalTitle,
	overview,
	posterPath,
	rating,
	supports,
	subtitle,
}: SingleCardPropsType) => {
	return (
		<Box className='flex items-start gap-4'>
			<Paper
				elevation={5}
				className='relative w-1/3 overflow-hidden rounded-2xl'
			>
				<Box className='absolute right-4 top-4'>
					<ChipRating rating={rating} precision={0.5} />
				</Box>

				<CardMedia
					component='img'
					image={`https://image.tmdb.org/t/p/w500${posterPath}`}
					title={title}
				/>
			</Paper>

			<CardContent className='w-2/3'>
				<Typography variant='h2' component='h3' className='mb-4 font-semibold'>
					{title}
				</Typography>

				{subtitle}

				<Box className='flex items-center gap-4'>
					{supports?.bluray && (
						<BlurayIcon className='text-6xl text-primary-900' />
					)}

					{supports?.bluray_hd && (
						<BlurayUltraHDIcon className='text-8xl text-primary-900' />
					)}
				</Box>
			</CardContent>
		</Box>
	);
};

export default SingleCard;
