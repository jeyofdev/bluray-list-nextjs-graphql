import PlayCircleIcon from '@mui/icons-material/PlayCircleFilled';
import { Box, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import Link from 'next/link';

type LogoType = {
	variant: Variant;
};

const Logo = ({ variant }: LogoType) => {
	return (
		<Box className='flex items-center gap-1.5'>
			<PlayCircleIcon />
			<Link href='/' passHref legacyBehavior>
				<Typography
					variant={variant}
					noWrap
					classes={{
						root: 'no-underline text-primary-50 text-md tracking-normal font-bold font-mono cursor-pointer',
					}}
				>
					Bluray List
				</Typography>
			</Link>
		</Box>
	);
};

export default Logo;
