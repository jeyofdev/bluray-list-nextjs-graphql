import { Box } from '@mui/material';

type ItemsListPropsType = {
	items: any;
	renderItems: any;
};

const ItemsList = ({ items, renderItems }: ItemsListPropsType) => {
	return (
		<Box className='grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-5'>
			{items?.map((data: any) => renderItems(data))}
		</Box>
	);
};

export default ItemsList;
