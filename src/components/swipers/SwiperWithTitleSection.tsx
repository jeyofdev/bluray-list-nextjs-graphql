import MainSwiper from '@components/ui/swiper/MainSwiper';
import { MovieResponse } from '@graphql/__generated__/graphql-type';
import { Box, Button, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

type SwiperWithTitleSectionPropsType = {
	title: string;
	buttonHref: string;
	buttonLabel: string | ReactNode;
	data: any;
	refetch: any;
};

const SwiperWithTitleSection = ({
	title,
	buttonHref,
	buttonLabel,
	data,
	refetch,
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
					list={data?.movies?.slice(0, 15) as MovieResponse[]}
					refetch={refetch}
				/>
			</Suspense>
		</>
	);
};

export default SwiperWithTitleSection;
