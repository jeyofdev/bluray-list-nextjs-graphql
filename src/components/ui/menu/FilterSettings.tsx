import DeleteIcon from '@mui/icons-material/Delete';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useState,
} from 'react';

type FilterSettingsPropsType = {
	title: string;
	genresLabel: string[];
	filters: any;
	setFilters: Dispatch<SetStateAction<{}>>;
};

const FilterSettings = ({
	title,
	genresLabel,
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

	const handleChangeGenre = (e: ChangeEvent<HTMLInputElement>) => {
		setFilters({
			...filters,
			genres: { ...filters.genres, [e.target.name]: e.target.checked },
		});
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
						'bg-primary-50 overflow-visible drop-shadow-lg mt-4 before:content-[""] before:block before:absolute before:top-0 before:right-[14px] before:w-2.5 before:h-2.5 before:bg-primary-50 before:-translate-y-1/2 before:rotate-45 before:z-10',
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={handleClose}>
					<IconButton disableRipple onClick={() => {}}>
						<DeleteIcon className='text-xl' />
					</IconButton>
				</MenuItem>

				<Divider
					classes={{
						root: '!my-0',
					}}
				/>

				<Box className='flex flex-col items-start p-4'>
					<Typography
						variant='h6'
						className='text-lg font-bold text-primary-900'
					>
						Genres
					</Typography>

					{filters?.genres ? (
						<FormGroup>
							{genresLabel?.map(genreLabel => (
								<FormControlLabel
									key={genreLabel}
									className='m-0'
									control={
										<Checkbox
											checked={filters?.genres[genreLabel]}
											inputProps={{ 'aria-label': 'controlled' }}
											classes={{
												root: 'text-sm py-2 pl-0 pr-2',
											}}
											name={genreLabel}
											onChange={handleChangeGenre}
										/>
									}
									label={
										<Typography
											variant='h6'
											className='text-sm font-normal text-primary-900'
										>
											{genreLabel}
										</Typography>
									}
								/>
							))}
						</FormGroup>
					) : null}
				</Box>
			</Menu>
		</>
	);
};

export default FilterSettings;
