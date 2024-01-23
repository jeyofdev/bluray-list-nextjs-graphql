import BlurayIcon from '@components/icons/BlurayIcon';
import BlurayUltraHDIcon from '@components/icons/BlurayUltraHDIcon';
import { SupportEnum } from '@enums/index';
import { SerieDetails } from '@graphql/__generated__/graphql-type';
import useSupport from '@hooks/useSupport';
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Checkbox,
	Typography,
} from '@mui/material';

type SearchSerieCardProps = {
	serie: SerieDetails;
	addSerie?: any;
	refetch: any;
	onClose: () => void;
};

const SearchSerieCard = ({
	serie,
	addSerie,
	refetch,
	onClose,
}: SearchSerieCardProps) => {
	const { itemSupports, onChange: handleChangeItemSupports } = useSupport();

	const handleClick = () => {
		addSerie({
			variables: {
				tmdbSerieId: serie.id,
				season: 1,
				support: itemSupports,
			},
			onCompleted: refetch,
		});

		onClose();
	};

	return (
		<Card className='group relative flex items-stretch'>
			<Box className='absolute left-0 top-0 z-50 hidden size-full flex-col items-center justify-center p-4 hover:flex group-hover:flex'>
				<Box className='absolute -z-10 size-full bg-primary-200 opacity-90'></Box>
				<Typography variant='h6' className='mb-4 text-center text-primary-900'>
					Select the platform(s)
				</Typography>

				<Box>
					<Checkbox
						icon={<BlurayIcon className='text-5xl text-primary-900' />}
						checkedIcon={<BlurayIcon className='text-5xl text-sky-400' />}
						onChange={() => handleChangeItemSupports(SupportEnum.BLURAY)}
					/>

					<Checkbox
						icon={<BlurayUltraHDIcon className='text-7xl text-primary-900' />}
						checkedIcon={
							<BlurayUltraHDIcon className='text-7xl text-sky-400' />
						}
						onChange={() => handleChangeItemSupports(SupportEnum.BLURAY_HD)}
					/>
				</Box>

				<Button variant='contained' color='secondary' onClick={handleClick}>
					Add to list
				</Button>
			</Box>

			<CardActionArea className='flex flex-col items-center justify-start'>
				<CardMedia
					component='img'
					className='w-full'
					image={`https://image.tmdb.org/t/p/w500${serie?.poster_path}`}
					title={serie.name as string}
				/>

				<CardContent>
					<Typography
						variant='h6'
						component='h3'
						className='text-center text-lg leading-6'
					>
						{serie?.name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default SearchSerieCard;
