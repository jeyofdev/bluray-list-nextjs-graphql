import { Box, Typography } from '@mui/material';

type ContentItemPropsType = {
	title: string;
	value: string;
	titleClassName: string;
	valueClassName: string;
};

export const ContentItem = ({
	title,
	value,
	titleClassName,
	valueClassName,
}: ContentItemPropsType) => {
	return (
		<Box>
			<Typography
				component='h6'
				className={`mb-1 font-semibold ${titleClassName}`}
			>
				{title} :
			</Typography>

			<Typography component='p' className={`font-normal ${valueClassName}`}>
				{value}
			</Typography>
		</Box>
	);
};
