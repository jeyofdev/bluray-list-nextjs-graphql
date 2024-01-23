import { FormControl, Input } from '@mui/material';
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from 'react';

export type SearchTextFieldPropsType = {
	placeholder: string;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	setSearchQuery: Dispatch<SetStateAction<string>>;
};

const SearchTextField = ({
	placeholder,
	search,
	setSearch,
	setSearchQuery,
}: SearchTextFieldPropsType) => {
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSearchQuery = () => {
		setSearchQuery(search);
	};

	const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' && search.length > 0) {
			handleSearchQuery();
		}
	};

	return (
		<FormControl
			variant='standard'
			classes={{ root: 'w-full bg-transparent mt-4' }}
		>
			<Input
				type={'text'}
				placeholder={placeholder}
				value={search}
				onChange={handleSearch}
				onKeyUp={onKeyUp}
				disableUnderline
				autoFocus
				classes={{
					input:
						'p-0 h-[4.5rem] text-7xl uppercase text-primary-400 placeholder:text-primary-300',
				}}
			/>
		</FormControl>
	);
};

export default SearchTextField;
