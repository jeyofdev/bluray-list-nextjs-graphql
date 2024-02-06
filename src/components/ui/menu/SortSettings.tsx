import CloseIcon from '@mui/icons-material/Close';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Box, Divider, IconButton, Menu, Tooltip } from '@mui/material';
import {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useState,
} from 'react';
import { RadioItemType, SortType } from '../../../types';
import SortRadio from '../form/SortRadio';

type SortSettingsPropsType = {
	title: string;
	sorts: SortType;
	setSorts: Dispatch<SetStateAction<SortType>>;
	sortNameItems: RadioItemType[];
	sortOrderItems: RadioItemType[];
};

const SortSettings = ({
	title,
	sorts,
	setSorts,
	sortNameItems,
	sortOrderItems,
}: SortSettingsPropsType) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const [showSortRadio, setShowSortRadio] = useState(
		Object.keys(sorts).map(el => ({ [el]: true })),
	);

	const [sortByRadio, setSortByRadio] = useState(
		Object.keys(sorts).map((el, i) => ({ [el]: i === 0 ? true : false })),
	);

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const getSortsNames = () => {
		return Array.from(new Set(Object.keys(sorts)));
	};

	const handleChangeSortRadio = (
		e: ChangeEvent<HTMLInputElement>,
		key: string,
	) => {
		setSorts({
			...sorts,
			[key]: (e.target as HTMLInputElement).value,
		});
	};

	const handleChangeShowSortRadio = (
		e: ChangeEvent<HTMLInputElement>,
		sortName: string,
	) => {
		setShowSortRadio({
			...showSortRadio,
			[sortName]: (e.target as HTMLInputElement).checked,
		});
	};

	return (
		<>
			<Box className='flex items-center text-center'>
				<Tooltip
					title={title}
					arrow
					classes={{
						tooltip: 'bg-primary-500',
						arrow: 'text-primary-500',
					}}
				>
					<IconButton
						size='small'
						onClick={handleClick}
						classes={{
							root: 'bg-primary-50 hover:bg-primary-50 border-2 border-solid border-primary-700 rounded-full',
						}}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
					>
						<SwapVertIcon classes={{ root: 'text-primary-900 text-lg' }} />
					</IconButton>
				</Tooltip>
			</Box>

			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				MenuListProps={{
					disablePadding: true,
				}}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
					},
				}}
				classes={{
					paper:
						'min-w-40 max-h-72 sm:max-h-96 overflow-y-auto p-0 bg-primary-50 overflow-visible drop-shadow-lg mt-4 before:content-[""] before:block before:absolute before:top-0 before:right-[14px] before:w-2.5 before:h-2.5 before:bg-primary-50 before:-translate-y-1/2 before:rotate-45 before:z-10',
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<IconButton
					size='large'
					classes={{
						root: 'absolute right-1 top-1 hover:bg-danger-50 text-danger-500',
					}}
					onClick={handleClose}
				>
					<CloseIcon className='size-5' />
				</IconButton>

				<Box className='flex flex-col items-start p-0'>
					<SortRadio
						title='Sort by'
						value={sorts?.name}
						onChange={e => handleChangeSortRadio(e, 'name')}
						radioItems={sortNameItems}
					/>

					<Divider
						classes={{
							root: 'w-full !my-0',
						}}
					/>

					<SortRadio
						title='Order by'
						value={sorts?.order}
						onChange={e => handleChangeSortRadio(e, 'order')}
						radioItems={sortOrderItems}
					/>
				</Box>

				{/* {getSortsNames().map(sortName => (
					<Box key={sortName} className='flex flex-col items-start p-4'>
						<SortRadio
							title='Order by'
							value={sorts?.[sortName as keyof typeof sorts]?.value}
							onChange={e => handleChangeSortRadio(e, sortName)}
							labels={['Asc', 'Desc']}
						/>
					</Box>
				))} */}

				{/* {getSortsNames().map(sortName => (
					<Box key={sortName} className='flex flex-col items-start p-4'>
						<FormControlLabel
							className='m-0'
							label={
								<Typography
									variant='h6'
									className='text-lg font-bold text-primary-900'
								>
									{sorts?.[sortName as keyof typeof sorts]?.label}
								</Typography>
							}
							control={
								<Checkbox
									checked={
										!!showSortRadio?.[sortName as keyof typeof showSortRadio]
									}
									name={sortName}
									onChange={e => handleChangeShowSortRadio(e, sortName)}
									classes={{
										root: 'text-sm py-2 pl-0 pr-2',
									}}
								/>
							}
						/>

						{showSortRadio?.[sortName as keyof typeof showSortRadio] ? (
							<SortRadio
								value={sorts?.[sortName as keyof typeof sorts]?.value}
								onChange={e => handleChangeSortRadio(e, sortName)}
								labels={['asc', 'desc']}
							/>
						) : null}
					</Box>
				))} */}
			</Menu>
		</>
	);
};

export default SortSettings;
