// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { SwiperDirectionEnum } from '@enums/index';
import { MovieResponse } from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import 'swiper/css';
import SwiperButton from './SwiperButton';

type MainSwiperPropsType = {
	list: MovieResponse[];
};

const MainSwiper = ({ list }: MainSwiperPropsType) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={2}
			onSlideChange={() => {}}
			onSwiper={() => {}}
		>
			{list?.map(data => (
				<SwiperSlide key={data.id}>{data.details?.title}</SwiperSlide>
			))}

			<Box>
				<SwiperButton direction={SwiperDirectionEnum.LEFT} />
			</Box>

			<Box>
				<SwiperButton direction={SwiperDirectionEnum.RIGHT} />
			</Box>
		</Swiper>
	);
};

export default MainSwiper;
