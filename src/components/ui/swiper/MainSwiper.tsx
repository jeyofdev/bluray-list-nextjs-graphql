// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import ListItemSwiperCard from '@components/cards/ListItemSwiperCard';
import SwiperButton from '@components/ui/swiper/SwiperButton';
import { BreakpointEnum, SwiperDirectionEnum, TypeEnum } from '@enums/index';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import { useWindowSize } from 'usehooks-ts';

type MainSwiperPropsType = {
	dataType: TypeEnum;
	list: any;
	refetch: any;
};

const MainSwiper = ({ dataType, list, refetch }: MainSwiperPropsType) => {
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
			{list?.map((item: any) => (
				<SwiperSlide key={item.id}>
					<ListItemSwiperCard
						key={item.id}
						posterPath={item.details?.poster_path as string}
						title={
							dataType === TypeEnum.MOVIE
								? (item.details?.title as string)
								: (item.details?.name as string)
						}
						onClick={() =>
							router.push(
								`/${dataType === TypeEnum.MOVIE ? 'movies' : 'series'}/${item?.id}`,
							)
						}
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
