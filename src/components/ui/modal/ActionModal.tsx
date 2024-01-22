import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
} from '@mui/material';
import { ReactNode } from 'react';
import { ChildrenType } from '../../../types';

export type ActionModalPropsType = {
	open: boolean;
	onClose: () => void;
	title?: string;
	icon: ReactNode;
	type: 'update' | 'delete';
	onAction: any;
	cancelLabel?: string;
	confirmLabel?: string;
	children?: ChildrenType;
};

const ActionModal = ({
	open,
	onClose,
	title,
	icon,
	type,
	onAction,
	cancelLabel,
	confirmLabel,
	children,
}: ActionModalPropsType) => {
	const prefix = type === 'delete' ? 'delete' : 'update';

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby={`${prefix}delete-dialog-title`}
			aria-describedby={`${prefix}delete-dialog-description`}
			classes={{
				paper: 'py-6 px-6 w-80',
			}}
		>
			<DialogContent className='flex flex-col items-center justify-center p-0'>
				<Box
					className={`mb-4 flex size-10 items-center justify-center rounded-full ${type === 'delete' ? 'bg-red-200' : 'bg-green-200'}`}
				>
					{icon}
				</Box>

				{title ? (
					<DialogContentText
						id={`${prefix}-dialog-description`}
						className='text-center text-base'
					>
						{title}
					</DialogContentText>
				) : null}

				{children}
			</DialogContent>

			<DialogActions className='mt-8 p-0'>
				<Button
					variant='contained'
					onClick={onClose}
					autoFocus
					className='bg-transparent text-primary-900 shadow-none hover:bg-transparent hover:shadow-none'
				>
					{cancelLabel ?? 'Cancel'}
				</Button>

				<Button
					variant='contained'
					onClick={onAction}
					className={`${type === 'delete' ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'}`}
				>
					{confirmLabel ?? 'Confirm'}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ActionModal;
