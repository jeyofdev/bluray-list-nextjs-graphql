import { Card, CardActionArea, CardMedia } from '@mui/material';
import { MouseEventHandler } from 'react';

type ListItemSwiperCardPropsType = {
	posterPath: string;
	title: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ListItemSwiperCard = ({
	posterPath,
	title,
	onClick,
}: ListItemSwiperCardPropsType) => {
	return (
		<>
			<Card className='relative flex items-stretch'>
				<CardActionArea
					className='relative flex flex-col items-center justify-start'
					onClick={onClick}
				>
					<CardMedia
						component='img'
						className='w-full'
						image={`https://image.tmdb.org/t/p/w500${posterPath}`}
						title={title}
					/>
				</CardActionArea>
			</Card>
		</>
	);
};

export default ListItemSwiperCard;
