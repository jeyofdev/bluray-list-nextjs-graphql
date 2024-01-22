import DeleteIcon from '@mui/icons-material/Delete';
import { Dispatch, SetStateAction } from 'react';
import { ToastType } from '../../../types';
import ActionModal from './ActionModal';

type DeleteActionModalPropsType = {
	open: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
	onDelete: any;
	itemTitle: string;
	toast: ToastType;
};

const DeleteActionModal = ({
	itemTitle,
	open,
	onClick,
	onDelete,
	toast,
}: DeleteActionModalPropsType) => {
	const handleClose = () => {
		onClick(false);
	};

	const handleDelete = () => {
		onDelete();
		handleClose();
		toast.onOpen(`The movie "${itemTitle}" has been removed from the list.`);
	};

	return (
		<ActionModal
			open={open}
			onClose={handleClose}
			title={`Are you sure you want to remove the movie "${itemTitle}" from
					your list?`}
			icon={<DeleteIcon className='text-red-400' />}
			type='delete'
			onAction={handleDelete}
		/>
	);
};

export default DeleteActionModal;
