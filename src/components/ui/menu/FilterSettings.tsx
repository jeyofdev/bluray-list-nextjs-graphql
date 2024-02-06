import MenuSettings from '@components/ui/menu/MenuSettings';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, Button, Divider, Typography } from '@mui/material';
import { convertToObjectWithValueFalse } from '@utils/index';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
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
			<MenuSettings
				title={title}
				icon={<FilterAltIcon classes={{ root: 'text-primary-900 text-lg' }} />}
			>
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
			</MenuSettings>
		</>
	);
};

export default FilterSettings;
