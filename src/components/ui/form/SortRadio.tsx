import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';

type SortRadioPropsType = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
};

const SortRadio = ({ value, onChange }: SortRadioPropsType) => {
	return (
		<FormControl>
			<RadioGroup
				name='sort-radio-buttons-group'
				value={value}
				onChange={onChange}
			>
				{['asc', 'desc'].map(el => (
					<FormControlLabel
						key={el}
						value={el}
						control={
							<Radio classes={{ root: 'text-sm py-1.5 px-2 ml-[2px]' }} />
						}
						label={
							<Typography
								variant='h6'
								className='text-sm font-normal text-primary-900'
							>
								{el.slice(0, 1).toUpperCase() + el.slice(1)}
							</Typography>
						}
						classes={{}}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export default SortRadio;
