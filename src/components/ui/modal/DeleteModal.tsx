import DeleteIcon from '@mui/icons-material/Delete';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type DeleteModalPropsType = {
	open: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
	onDelete: any;
	itemTitle: string;
};

const DeleteModal = ({
	itemTitle,
	open,
	onClick,
	onDelete,
}: DeleteModalPropsType) => {
	const handleClose = () => {
		onClick(false);
	};

	const handleDelete = () => {
		onDelete();
		handleClose();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='delete-dialog-title'
			aria-describedby='delete-dialog-description'
			classes={{
				paper: 'py-6 px-6 w-80',
			}}
		>
			<DialogContent className='flex flex-col items-center justify-center p-0'>
				<Box className='mb-4 flex size-10 items-center justify-center rounded-full bg-red-200'>
					<DeleteIcon className='text-red-400' />
				</Box>

				<DialogContentText
					id='delete-dialog-description'
					className='text-center text-base'
				>
					Are you sure you want to remove the movie &quot;{itemTitle}&quot; from
					your list?
				</DialogContentText>
			</DialogContent>

			<DialogActions className='mt-8 p-0'>
				<Button
					variant='contained'
					onClick={handleClose}
					autoFocus
					className='bg-transparent text-primary-900 shadow-none hover:bg-transparent hover:shadow-none'
				>
					Cancel
				</Button>

				<Button
					variant='contained'
					onClick={handleDelete}
					className='bg-red-600 hover:bg-red-500'
				>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteModal;
