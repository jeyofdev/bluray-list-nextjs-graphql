import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import PersonAvatar from '@components/ui/avatar/PersonAvatar';
import { ContentItem } from '@components/ui/content/ContentItem';
import ChipRating from '@components/ui/rating/ChipRating';
import { Cast, Crew } from '@graphql/__generated__/graphql-type';
import { Box, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { truncate } from '@utils/index';
import { ReactNode } from 'react';
import { SupportType } from '../../types';

type SingleCardPropsType = {
	title: string;
	originalTitle: string;
	overview: string;
	posterPath: string;
	rating: number;
	director: Crew | undefined;
	music: Crew | undefined;
	producers: Crew[] | undefined;
	cast: Cast[];
	supports: SupportType;
	subtitle?: ReactNode;
};

export const SingleCard = ({
	title,
	originalTitle,
	overview,
	posterPath,
	rating,
	director,
	music,
	producers,
	cast,
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

			<CardContent className='w-2/3 py-0'>
				<Typography
					variant='h2'
					component='h3'
					className='mb-4 text-5xl font-semibold'
				>
					{truncate(title, 60)}
				</Typography>

				{subtitle}

				<Box className='mt-8'>
					<ContentItem
						title='Original title'
						value={originalTitle}
						titleClassName='text-lg leading-4'
						valueClassName='text-base mb-4'
					/>

					<ContentItem
						title='Synopsys'
						value={overview}
						titleClassName='text-xl'
						valueClassName='text-base'
					/>
				</Box>

				<Box className='mt-4 flex flex-wrap gap-8'>
					<PersonAvatar
						data={director}
						title='Directed By'
						titleClassName='text-lg'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>

					<PersonAvatar
						data={music}
						title='Music By'
						titleClassName='text-lg'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>

					<PersonAvatar
						data={producers}
						title='Produced By'
						titleClassName='text-lg'
						valueClassName='text-sm'
						horizontalAlign='center'
					/>
				</Box>

				<Box className='mt-4 flex flex-wrap gap-8'>
					<PersonAvatar
						data={cast.length > 0 ? cast.slice(0, 6) : undefined}
						title='Cast'
						titleClassName='text-lg'
						valueClassName='text-sm'
						horizontalAlign='start'
						isCast
					/>
				</Box>

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
