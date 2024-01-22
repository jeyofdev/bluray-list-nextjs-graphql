import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import { SupportEnum } from '@enums/index';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Checkbox } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { SupportType, ToastType } from '../../../types';
import ActionModal from './ActionModal';

type UpdateActionModalPropsType = {
	open: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
	onUpdate: any;
	itemId: string;
	itemTitle: string;
	itemSupports: SupportType;
	toast: ToastType;
	refetch: any;
};

const UpdateActionModal = ({
	itemId,
	itemTitle,
	itemSupports,
	open,
	onClick,
	onUpdate,
	toast,
	refetch,
}: UpdateActionModalPropsType) => {
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
		<ActionModal
			open={open}
			onClose={handleClose}
			title={`select one or more support`}
			icon={<EditIcon className='text-green-400' />}
			type='delete'
			onAction={handleUpdate}
		>
			<Box>
				<Checkbox
					icon={<BlurayIcon className='text-5xl text-primary-900' />}
					checkedIcon={<BlurayIcon className='text-5xl text-sky-400' />}
					checked={movieSupports[SupportEnum.BLURAY]}
					onChange={() => handleChangeMovieSupports(SupportEnum.BLURAY)}
				/>

				<Checkbox
					icon={<BlurayUltraHDIcon className='text-7xl text-primary-900' />}
					checkedIcon={<BlurayUltraHDIcon className='text-7xl text-sky-400' />}
					checked={movieSupports[SupportEnum.BLURAY_HD]}
					onChange={() => handleChangeMovieSupports(SupportEnum.BLURAY_HD)}
				/>
			</Box>
		</ActionModal>
	);
};

export default UpdateActionModal;
