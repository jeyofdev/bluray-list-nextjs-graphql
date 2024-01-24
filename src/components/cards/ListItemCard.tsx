import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import CardSettings from '@components/ui/menu/CardSettings';
import DeleteActionModal from '@components/ui/modal/DeleteActionModal';
import UpdateActionModal from '@components/ui/modal/UpdateActionModal';
import ChipRating from '@components/ui/rating/ChipRating';
import { TypeEnum } from '@enums/index';
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
	type: TypeEnum;
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
	type,
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
					className='relative flex flex-col items-center justify-start'
					onClick={onClick}
				>
					<Box className='relative'>
						<Box className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
							<ChipRating rating={3} precision={0.5} />
						</Box>

						<CardMedia
							component='img'
							className='w-full'
							image={`https://image.tmdb.org/t/p/w500${posterPath}`}
							title={title}
						/>
					</Box>

					<CardContent className='mt-4'>
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
				type={type}
				itemTitle={title}
				open={showModalDelete}
				onClick={setShowModalDelete}
				onDelete={onDelete}
				toast={toast}
			/>

			<UpdateActionModal
				type={type}
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
