import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
	Box,
	Button,
	Divider,
	IconButton,
	Menu,
	Tooltip,
	Typography,
} from '@mui/material';
import { convertToObjectWithValueFalse } from '@utils/index';
import {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useState,
} from 'react';
import { FiltersType } from '../../../types';
import FilterCheckbox from '../form/FilterCheckbox';

type FilterSettingsPropsType = {
	title: string;
	genresLabel: string[];
	yearsLabel: string[];
	filters: FiltersType;
	setFilters: Dispatch<SetStateAction<FiltersType>>;
};

const FilterSettings = ({
	title,
	genresLabel,
	yearsLabel,
	filters,
	setFilters,
}: FilterSettingsPropsType) => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement>,
		filterName: string,
	) => {
		setFilters({
			...filters,
			[filterName]: {
				...filters[filterName as keyof typeof filters],
				[e.target.name]: e.target.checked,
			},
		});
	};

	const handleResetFilters = () => {
		const genres = convertToObjectWithValueFalse(Object.keys(filters.genres));
		const years = convertToObjectWithValueFalse(Object.keys(filters.years));

		setFilters({ genres, years });
	};

	return (
		<>
			<Box className='flex items-center text-center'>
				<Tooltip
					title={title}
					arrow
					classes={{
						tooltip: 'bg-primary-500',
						arrow: 'text-primary-500',
					}}
				>
					<IconButton
						size='small'
						onClick={handleClick}
						classes={{
							root: 'bg-primary-50 hover:bg-primary-50 border-2 border-solid border-primary-700 rounded-full',
						}}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
					>
						<FilterAltIcon classes={{ root: 'text-primary-900 text-lg' }} />
					</IconButton>
				</Tooltip>
			</Box>

			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				MenuListProps={{
					disablePadding: true,
				}}
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
					},
				}}
				classes={{
					paper:
						'p-0 bg-primary-50 overflow-visible drop-shadow-lg mt-4 before:content-[""] before:block before:absolute before:top-0 before:right-[14px] before:w-2.5 before:h-2.5 before:bg-primary-50 before:-translate-y-1/2 before:rotate-45 before:z-10',
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<IconButton
					size='large'
					classes={{
						root: 'absolute right-1 top-1 hover:bg-danger-50 text-danger-500',
					}}
					onClick={handleClose}
				>
					<CloseIcon className='size-5' />
				</IconButton>

				<FilterCheckbox
					filters={filters}
					title='Genres'
					filterKey='genres'
					filtersLabels={genresLabel}
					onChange={e => handleChange(e, 'genres')}
				/>

				<Divider
					classes={{
						root: '!my-0',
					}}
				/>

				<FilterCheckbox
					filters={filters}
					title='Years'
					filterKey='years'
					filtersLabels={yearsLabel}
					onChange={e => handleChange(e, 'years')}
				/>

				<Box className='mb-2 flex justify-center'>
					<Button
						variant='contained'
						color='primary'
						onClick={handleResetFilters}
					>
						<Typography variant='body2' className='normal-case'>
							Clear all filters
						</Typography>
					</Button>
				</Box>
			</Menu>
		</>
	);
};

export default FilterSettings;
