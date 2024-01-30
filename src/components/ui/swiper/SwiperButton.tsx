import { SwiperDirectionEnum } from '@enums/index';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import { useSwiper } from 'swiper/react';

export type SwiperButtonPropsType = {
	direction: SwiperDirectionEnum;
};

const SwiperButton = ({ direction }: SwiperButtonPropsType) => {
	const swiper = useSwiper();

	return (
		<IconButton
			size='small'
			classes={{
				root: 'bg-primary-50 hover:bg-primary-100',
			}}
			onClick={() =>
				direction === SwiperDirectionEnum.LEFT
					? swiper.slidePrev()
					: swiper.slideNext()
			}
		>
			{direction === SwiperDirectionEnum.LEFT ? (
				<ChevronLeftIcon className='size-8 text-primary-900' />
			) : (
				<ChevronRightIcon className='size-8 text-primary-900' />
			)}
		</IconButton>
	);
};

export default SwiperButton;
