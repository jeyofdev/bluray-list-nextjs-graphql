import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PaginationItem, Pagination as PaginationMUI } from '@mui/material';
import { PaginationHandleChangeCurrentPage } from '../../../types';

type PaginationPropsType = {
	totalItems: number;
	page: number;
	onChange: PaginationHandleChangeCurrentPage;
};

export const Pagination = ({
	totalItems,
	page,
	onChange,
}: PaginationPropsType) => {
	return (
		<PaginationMUI
			classes={{
				ul: 'gap-2',
			}}
			size='small'
			count={(totalItems as number) > 100 ? 100 : totalItems}
			page={page}
			onChange={onChange}
			renderItem={item => (
				<PaginationItem
					classes={{
						root: 'text-primary-900 text-xl w-9 h-9 rounded-full',
						selected: 'bg-transparent text-lg',
					}}
					slots={{
						previous: ArrowBackIcon,
						next: ArrowForwardIcon,
					}}
					{...item}
				/>
			)}
		/>
	);
};

export default Pagination;
