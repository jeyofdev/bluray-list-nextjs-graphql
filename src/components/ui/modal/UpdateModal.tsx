import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import { SupportEnum } from '@enums/indeX';
import EditIcon from '@mui/icons-material/Edit';
import {
	Box,
	Button,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
} from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { SupportType, ToastType } from '../../../types';

type UpdateModalPropsType = {
	open: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
	onUpdate: any;
	itemId: string;
	itemTitle: string;
	itemSupports: SupportType;
	toast: ToastType;
	refetch: any;
};

const UpdateModal = ({
	itemId,
	itemTitle,
	itemSupports,
	open,
	onClick,
	onUpdate,
	toast,
	refetch,
}: UpdateModalPropsType) => {
	const [movieSupports, setMovieSupports] = useState<SupportType>({
		bluray: itemSupports.bluray,
		bluray_hd: itemSupports.bluray_hd,
		dvd: itemSupports.dvd,
	});

	const handleClose = () => {
		onClick(false);
	};

	const handleUpdate = () => {
		onUpdate({
			variables: {
				movieId: itemId,
				support: movieSupports,
			},
			onCompleted: refetch,
		});
		handleClose();
		toast.onOpen(`The movie "${itemTitle}" has been updated with success.`);
	};

	const handleChangeMovieSupports = (support: SupportEnum) => {
		setMovieSupports({
			...movieSupports,
			[support]: !movieSupports[support],
		});
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='update-dialog-title'
			aria-describedby='update-dialog-description'
			classes={{
				paper: 'py-6 px-6 w-80',
			}}
		>
			<DialogContent className='flex flex-col items-center justify-center p-0'>
				<Box className='mb-4 flex size-10 items-center justify-center rounded-full bg-green-200'>
					<EditIcon className='text-green-400' />
				</Box>

				<DialogContentText
					id='update-dialog-description'
					className='text-center text-base'
				>
					select one or more support
				</DialogContentText>

				<Box>
					<Checkbox
						icon={<BlurayIcon className='text-5xl text-primary-900' />}
						checkedIcon={<BlurayIcon className='text-5xl text-sky-400' />}
						checked={movieSupports[SupportEnum.BLURAY]}
						onChange={() => handleChangeMovieSupports(SupportEnum.BLURAY)}
					/>

					<Checkbox
						icon={<BlurayUltraHDIcon className='text-7xl text-primary-900' />}
						checkedIcon={
							<BlurayUltraHDIcon className='text-7xl text-sky-400' />
						}
						checked={movieSupports[SupportEnum.BLURAY_HD]}
						onChange={() => handleChangeMovieSupports(SupportEnum.BLURAY_HD)}
					/>
				</Box>
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
					onClick={handleUpdate}
					className='bg-green-600 hover:bg-green-500'
				>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default UpdateModal;
