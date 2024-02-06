import MainSwiper from '@components/ui/swiper/MainSwiper';
import { TypeEnum } from '@enums/index';
import { Box, Button, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

type SwiperWithTitleSectionPropsType = {
	dataType: TypeEnum;
	title: string;
	buttonHref: string;
	buttonLabel: string | ReactNode;
	items: any[];
	refetch: any;
	itemsLimit: number;
};

const SwiperWithTitleSection = ({
	dataType,
	title,
	buttonHref,
	buttonLabel,
	items,
	refetch,
	itemsLimit,
}: SwiperWithTitleSectionPropsType) => {
	return (
		<>
			<Box className='flex justify-between'>
				<Typography variant='h5' component='h5' className='my-0 text-xl'>
					{title}
				</Typography>

				<Link href={buttonHref} passHref legacyBehavior>
					<Button disableRipple>
						<Typography
							variant='body1'
							component='p'
							className='my-0 text-sm text-primary-900'
						>
							{buttonLabel}
						</Typography>
					</Button>
				</Link>
			</Box>

			<Divider
				classes={{
					root: 'mt-2 mb-4',
				}}
			/>

			<Suspense fallback={<h1>load</h1>}>
				<MainSwiper
					dataType={dataType}
					list={items?.slice(0, itemsLimit)}
					refetch={refetch}
				/>
			</Suspense>
		</>
	);
};

export default SwiperWithTitleSection;
