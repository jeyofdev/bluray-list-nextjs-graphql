import { SortEnum } from '@enums/index';
import CloseIcon from '@mui/icons-material/Close';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Box, IconButton, Menu, Tooltip } from '@mui/material';
import {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useState,
} from 'react';
import { SortType } from '../../../types';
import SortRadio from '../form/SortRadio';

type SortSettingsPropsType = {
	title: string;
	sorts: SortType;
	setSorts: Dispatch<SetStateAction<SortType>>;
};

const SortSettings = ({ title, sorts, setSorts }: SortSettingsPropsType) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const getSortsNames = () => {
		return Array.from(new Set(Object.keys(sorts)));
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>, sortName: string) => {
		setSorts({
			...sorts,
			[sortName]: (e.target as HTMLInputElement).value as SortEnum,
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
						'min-w-48 max-h-72 sm:max-h-96 overflow-y-auto p-0 bg-primary-50 overflow-visible drop-shadow-lg mt-4 before:content-[""] before:block before:absolute before:top-0 before:right-[14px] before:w-2.5 before:h-2.5 before:bg-primary-50 before:-translate-y-1/2 before:rotate-45 before:z-10',
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

				{getSortsNames().map(sortName => (
					<SortRadio
						key={sortName}
						title='Created at'
						value={sorts?.[sortName as keyof typeof sorts]}
						onChange={e => handleChange(e, sortName)}
					/>
				))}
			</Menu>
		</>
	);
};

export default SortSettings;
