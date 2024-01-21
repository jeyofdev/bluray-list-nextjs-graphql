import { XMarkIcon } from '@heroicons/react/24/outline';
import { ToastOnCloseType } from '@hooks/useToast';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
	Alert,
	IconButton,
	Snackbar,
	SnackbarOrigin,
	Typography,
} from '@mui/material';
import { createPortal } from 'react-dom';

type ToastPropsType = {
	open: boolean;
	message?: string;
	anchorOrigin?: SnackbarOrigin;
	autoHideDuration?: number;
	portal?: boolean;
	onClose: ToastOnCloseType;
};

const Toast = ({
	open,
	message,
	anchorOrigin,
	autoHideDuration,
	portal,
	onClose,
}: ToastPropsType) => {
	const snackbar = (
		<Snackbar
			open={open}
			anchorOrigin={anchorOrigin ?? { vertical: 'top', horizontal: 'right' }}
			autoHideDuration={autoHideDuration ?? 5000}
			onClose={onClose}
			message={message}
		>
			<Alert
				severity='success'
				classes={{
					root: 'flex items-center mb-3 bg-green-200 max-w-md',
					action: 'py-0',
				}}
				icon={
					<CheckCircleIcon
						fontSize='inherit'
						className='text-2xl text-green-700'
					/>
				}
				action={
					<IconButton
						size='large'
						classes={{
							root: 'bg-transparent hover:bg-transparent p-0',
						}}
						onClick={onClose}
					>
						<XMarkIcon className='size-7 text-green-700' />
					</IconButton>
				}
			>
				<Typography
					variant='h6'
					component='h5'
					className='text-lg text-green-700'
				>
					{message}
				</Typography>
			</Alert>
		</Snackbar>
	);

	if (portal) {
		return <>{createPortal(snackbar, document.body)}</>;
	}

	return snackbar;
};

export default Toast;
