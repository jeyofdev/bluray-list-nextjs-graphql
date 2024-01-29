import {
	Box,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { FiltersType } from '../../../types';

type FilterCheckboxPropsType = {
	title: string;
	filters: FiltersType;
	filterKey: string;
	filtersLabels: string[];
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FilterCheckbox = ({
	title,
	filters,
	filterKey,
	filtersLabels,
	onChange,
}: FilterCheckboxPropsType) => {
	return (
		<Box className='flex flex-col items-start p-4'>
			<Typography variant='h6' className='text-lg font-bold text-primary-900'>
				{title}
			</Typography>

			{filters?.[filterKey as keyof typeof filters] ? (
				<FormGroup>
					{filtersLabels?.map(label => (
						<FormControlLabel
							key={label}
							className='m-0'
							control={
								<Checkbox
									checked={
										// @ts-ignore
										filters?.[filterKey as keyof typeof filters][label]
									}
									inputProps={{ 'aria-label': 'controlled' }}
									classes={{
										root: 'text-sm py-2 pl-0 pr-2',
									}}
									name={label}
									onChange={onChange}
								/>
							}
							label={
								<Typography
									variant='h6'
									className='text-sm font-normal text-primary-900'
								>
									{label}
								</Typography>
							}
						/>
					))}
				</FormGroup>
			) : null}
		</Box>
	);
};

export default FilterCheckbox;
