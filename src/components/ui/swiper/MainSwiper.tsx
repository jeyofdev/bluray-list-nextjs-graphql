// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import ListItemSwiperCard from '@components/cards/ListItemSwiperCard';
import { BreakpointEnum, SwiperDirectionEnum } from '@enums/index';
import { MovieResponse } from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import { useWindowSize } from 'usehooks-ts';
import SwiperButton from './SwiperButton';

type MainSwiperPropsType = {
	list: MovieResponse[];
	refetch: any;
};

const MainSwiper = ({ list, refetch }: MainSwiperPropsType) => {
	const router = useRouter();
	const { width } = useWindowSize();

	const getSlidesPerView = () => {
		if (width >= 400 && width < 600) return 2;
		if (width >= 600 && width < BreakpointEnum.SM) return 3;
		if (width >= BreakpointEnum.SM && width < BreakpointEnum.MD) return 4;
		if (width >= BreakpointEnum.MD && width < 1200) return 5;
		if (width >= 1200 && width < BreakpointEnum.LG) return 6;
		if (width >= BreakpointEnum.LG) return 7;

		return 1;
	};

	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={getSlidesPerView()}
			onSlideChange={() => {}}
			onSwiper={() => {}}
			className=''
		>
			{list?.map(movie => (
				<SwiperSlide key={movie.id}>
					<ListItemSwiperCard
						key={movie.id}
						posterPath={movie.details?.poster_path as string}
						title={movie.details?.title as string}
						onClick={() => router.push(`/movies/${movie?.id}`)}
					/>
				</SwiperSlide>
			))}

			<Box className='absolute right-4 top-1/2 z-10 -translate-y-1/2'>
				<SwiperButton direction={SwiperDirectionEnum.RIGHT} />
			</Box>

			<Box className='absolute left-4 top-1/2 z-10 -translate-y-1/2'>
				<SwiperButton direction={SwiperDirectionEnum.LEFT} />
			</Box>
		</Swiper>
	);
};

export default MainSwiper;
