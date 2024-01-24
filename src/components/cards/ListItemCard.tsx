import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import CardSettings from '@components/ui/menu/CardSettings';
import DeleteActionModal from '@components/ui/modal/DeleteActionModal';
import UpdateActionModal from '@components/ui/modal/UpdateActionModal';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { MouseEventHandler, useState } from 'react';
import { SupportType, ToastType } from '../../types';

type ListItemCardPropsType = {
	id: string;
	posterPath: string;
	title: string;
	onDelete: any;
	onUpdate: any;
	supports?: SupportType;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	refetch: any;
	toast: ToastType;
};

const ListItemCard = ({
	id,
	posterPath,
	title,
	onDelete,
	onUpdate,
	supports,
	onClick,
	refetch,
	toast,
}: ListItemCardPropsType) => {
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
	const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

	return (
		<>
			<Card className='relative flex items-stretch'>
				<CardSettings
					title='Movie settings'
					setShowModalDelete={setShowModalDelete}
					setShowModalEdit={setShowModalUpdate}
				/>

				<CardActionArea
					className='flex flex-col items-center justify-start'
					onClick={onClick}
				>
					<CardMedia
						component='img'
						className='w-full'
						image={`https://image.tmdb.org/t/p/w500${posterPath}`}
						title={title}
					/>

					<CardContent>
						<Typography
							variant='h6'
							component='h3'
							className='text-center text-lg leading-6'
						>
							{title}
						</Typography>

						<Box className='flex items-center justify-center gap-4'>
							{supports?.bluray && (
								<BlurayIcon className='text-4xl text-primary-900' />
							)}

							{supports?.bluray_hd && (
								<BlurayUltraHDIcon className='text-6xl text-primary-900' />
							)}
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>

			<DeleteActionModal
				itemTitle={title}
				open={showModalDelete}
				onClick={setShowModalDelete}
				onDelete={onDelete}
				toast={toast}
			/>

			<UpdateActionModal
				itemId={id}
				itemTitle={title}
				itemSupports={supports as SupportType}
				open={showModalUpdate}
				onClick={setShowModalUpdate}
				onUpdate={onUpdate}
				toast={toast}
				refetch={refetch}
			/>
		</>
	);
};

export default ListItemCard;
