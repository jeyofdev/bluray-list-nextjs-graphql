import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type SearchSelectPropsType = {
	options: string[] | number[];
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

const SearchSelect = ({ options, value, setValue }: SearchSelectPropsType) => {
	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value);
	};

	return (
		<FormControl className='m-0 mb-4 mt-2 w-full'>
			<Select
				value={value}
				onChange={handleChange}
				displayEmpty
				MenuProps={{
					classes: {
						list: 'p-0',
					},
				}}
				classes={{
					root: 'p-0',
					select: 'px-1 py-2 !outline-none !shadow-none',
				}}
			>
				{options?.map(el => (
					<MenuItem
						classes={{
							root: 'px-4 py-2 hover:bg-primary-200',
						}}
						key={`season-${el}`}
						value={el}
					>{`Season ${el}`}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SearchSelect;
