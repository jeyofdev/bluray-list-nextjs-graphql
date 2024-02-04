import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import { SupportEnum, TypeEnum } from '@enums/index';
import { Season } from '@graphql/__generated__/graphql-type';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Checkbox, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { SupportType, ToastType } from '../../../types';
import SearchSelect from '../form/SearchSelect';
import ActionModal from './ActionModal';

type UpdateActionModalPropsType = {
	type: TypeEnum;
	open: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
	onUpdate: any;
	itemId: string;
	itemTitle: string;
	itemSupports: SupportType;
	selectedSeason: string;
	setSelectedSeason: Dispatch<SetStateAction<string>>;
	seasons?: Season[];
	toast: ToastType;
	refetch: any;
};

const UpdateActionModal = ({
	type,
	itemId,
	itemTitle,
	itemSupports,
	selectedSeason,
	setSelectedSeason,
	seasons,
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
		const variables =
			type === 'movie'
				? { movieId: itemId, support: movieSupports }
				: { serieId: itemId, season: selectedSeason, support: movieSupports };

		onUpdate({
			variables,
			onCompleted: refetch,
		});
		handleClose();
		toast.onOpen(`The ${type} "${itemTitle}" has been updated with success.`);
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
			icon={<EditIcon className='text-green-400' />}
			type='update'
			onAction={handleUpdate}
		>
			<Box className='flex flex-col items-center'>
				<Typography variant='body1' className='text-center text-primary-900'>
					Select one or more support
				</Typography>

				<Box className='-mt-5'>
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
			</Box>

			{type === TypeEnum.SERIE ? (
				<Box className='flex flex-col items-center'>
					<Typography variant='body1' className='text-center text-primary-900'>
						Select the season
					</Typography>

					<SearchSelect
						options={seasons?.map(season => season.season_number) as number[]}
						value={selectedSeason}
						setValue={setSelectedSeason}
					/>
				</Box>
			) : null}
		</ActionModal>
	);
};

export default UpdateActionModal;
