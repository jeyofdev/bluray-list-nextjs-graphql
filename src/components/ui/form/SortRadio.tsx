import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';

type SortRadioPropsType = {
	title: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
};

const SortRadio = ({ title, value, onChange }: SortRadioPropsType) => {
	return (
		<Box>
			<Typography>{title}</Typography>

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
							control={<Radio />}
							label={el.slice(0, 1).toUpperCase() + el.slice(1)}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default SortRadio;
