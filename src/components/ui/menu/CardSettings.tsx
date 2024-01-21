import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
	Box,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
} from '@mui/material';
import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';

type CardSettingsPropsType = {
	title: string;
	setShowModalDelete: Dispatch<SetStateAction<boolean>>;
	setShowModalEdit: Dispatch<SetStateAction<boolean>>;
};

const CardSettings = ({
	title,
	setShowModalDelete,
	setShowModalEdit,
}: CardSettingsPropsType) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Box className='absolute right-2 top-2 z-10 flex items-center text-center'>
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
						<MoreIcon classes={{ root: 'text-primary-900 text-lg' }} />
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
				onClick={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
					},
				}}
				classes={{
					paper:
						'overflow-visible drop-shadow-lg mt-4 before:content-[""] before:block before:absolute before:top-0 before:right-[14px] before:w-2.5 before:h-2.5 before:bg-primary-50 before:-translate-y-1/2 before:rotate-45 before:z-10',
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={handleClose}>
					<IconButton disableRipple onClick={() => setShowModalDelete(true)}>
						<DeleteIcon className='text-xl' />
					</IconButton>
				</MenuItem>

				<Divider
					classes={{
						root: '!my-0',
					}}
				/>

				<MenuItem onClick={handleClose}>
					<IconButton disableRipple onClick={() => setShowModalEdit(true)}>
						<EditIcon className='text-xl' />
					</IconButton>
				</MenuItem>
			</Menu>
		</>
	);
};

export default CardSettings;
