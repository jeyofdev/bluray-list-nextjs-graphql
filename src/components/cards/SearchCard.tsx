import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import ChipRating from '@components/ui/rating/ChipRating';
import { SupportEnum } from '@enums/index';
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Checkbox,
	Typography,
} from '@mui/material';
import { truncate } from '@utils/index';

type SearchCardProps = {
	title: string;
	posterPath: string;
	rating?: number;
	addButtonLabel: string;
	onClick: () => void;
	onChangeItemSupports: (support: SupportEnum) => void;
};

const SearchCard = ({
	title,
	posterPath,
	rating,
	addButtonLabel,
	onClick,
	onChangeItemSupports,
}: SearchCardProps) => {
	return (
		<Card className='group relative flex items-stretch'>
			<Box className='absolute left-0 top-0 z-50 hidden size-full flex-col items-center justify-center p-4 hover:flex group-hover:flex'>
				<Box className='absolute -z-10 size-full bg-primary-200 opacity-90'></Box>
				<Typography variant='h6' className='mb-4 text-center text-primary-900'>
					Select the platform(s)
				</Typography>

				<Box>
					<Checkbox
						icon={<BlurayIcon className='text-5xl text-primary-900' />}
						checkedIcon={<BlurayIcon className='text-5xl text-sky-400' />}
						onChange={() => onChangeItemSupports(SupportEnum.BLURAY)}
					/>

					<Checkbox
						icon={<BlurayUltraHDIcon className='text-7xl text-primary-900' />}
						checkedIcon={
							<BlurayUltraHDIcon className='text-7xl text-sky-400' />
						}
						onChange={() => onChangeItemSupports(SupportEnum.BLURAY_HD)}
					/>
				</Box>

				<Button variant='contained' color='secondary' onClick={onClick}>
					{addButtonLabel}
				</Button>
			</Box>

			<CardActionArea className='flex flex-col items-center justify-start'>
				<Box className='relative'>
					<CardMedia
						component='img'
						className='w-full'
						image={`https://image.tmdb.org/t/p/w500${posterPath}`}
						title={title}
					/>

					{rating ? (
						<Box className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
							<ChipRating rating={rating} precision={0.5} />
						</Box>
					) : null}
				</Box>

				<CardContent className='mt-4'>
					<Typography
						variant='h6'
						component='h3'
						className='text-center text-lg leading-6'
					>
						{truncate(title, 30)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default SearchCard;
