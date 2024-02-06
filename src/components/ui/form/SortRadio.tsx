import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { RadioItemType } from '../../../types';

type SortRadioPropsType = {
	title: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	radioItems: RadioItemType[];
};

const SortRadio = ({
	title,
	value,
	onChange,
	radioItems,
}: SortRadioPropsType) => {
	return (
		<Box className='flex flex-col items-start p-4'>
			<Typography variant='h6' className='text-lg font-bold text-primary-900'>
				{title}
			</Typography>

			<FormControl>
				<RadioGroup
					name='sort-radio-buttons-group'
					value={value}
					onChange={onChange}
				>
					{radioItems.map(el => (
						<FormControlLabel
							key={el.key}
							value={el.key}
							control={
								<Radio classes={{ root: 'text-sm py-1.5 px-2 ml-[2px]' }} />
							}
							label={
								<Typography
									variant='h6'
									className='text-sm font-normal text-primary-900'
								>
									{el.label.slice(0, 1).toUpperCase() + el.label.slice(1)}
								</Typography>
							}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default SortRadio;
