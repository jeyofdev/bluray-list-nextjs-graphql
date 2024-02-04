import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import CardSettings from '@components/ui/menu/CardSettings';
import DeleteActionModal from '@components/ui/modal/DeleteActionModal';
import UpdateActionModal from '@components/ui/modal/UpdateActionModal';
import ChipRating from '@components/ui/rating/ChipRating';
import { TypeEnum } from '@enums/index';
import { Season } from '@graphql/__generated__/graphql-type';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Tooltip,
	Typography,
} from '@mui/material';
import { truncate } from '@utils/index';
import { MouseEventHandler, useState } from 'react';
import { SupportType, ToastType } from '../../types';

type ListItemCardPropsType = {
	type: TypeEnum;
	id: string;
	posterPath: string;
	title: string;
	rating: number;
	season?: number;
	onDelete: any;
	onUpdate: any;
	supports?: SupportType;
	seasons?: Season[];
	onClick?: MouseEventHandler<HTMLButtonElement>;
	refetch: any;
	toast: ToastType;
};

const ListItemCard = ({
	id,
	type,
	posterPath,
	title,
	rating,
	season,
	seasons,
	onDelete,
	onUpdate,
	supports,
	onClick,
	refetch,
	toast,
}: ListItemCardPropsType) => {
	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
	const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

	const [selectedSeason, setSelectedSeason] = useState<string>(
		season ? season.toString() : '',
	);

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
							<ChipRating rating={rating} precision={0.5} />
						</Box>

						<CardMedia
							component='img'
							className='w-full'
							image={`https://image.tmdb.org/t/p/w500${posterPath}`}
							title={title}
						/>
					</Box>

					<CardContent className='mt-4'>
						{title.length > 30 ? (
							<Tooltip
								title={title}
								placement='top-start'
								arrow
								classes={{
									tooltip: 'bg-primary-900 text-primary-50 rounded-xl max-w-60',
									arrow: 'text-primary-900',
								}}
							>
								<Typography
									variant='h6'
									component='h3'
									className='text-center text-lg leading-6 text-primary-900'
								>
									{truncate(title, 30)}
								</Typography>
							</Tooltip>
						) : (
							<Typography
								variant='h6'
								component='h3'
								className='text-center text-lg leading-6'
							>
								{truncate(title, 30)}
							</Typography>
						)}

						{type === TypeEnum.SERIE ? (
							<Typography
								variant='body2'
								component='p'
								className='text-center leading-6'
							>
								(season {season})
							</Typography>
						) : null}

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
				selectedSeason={selectedSeason}
				setSelectedSeason={setSelectedSeason}
				seasons={seasons}
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
