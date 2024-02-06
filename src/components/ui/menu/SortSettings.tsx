import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Box, Divider } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { RadioItemType, SortType } from '../../../types';
import SortRadio from '../form/SortRadio';
import MenuSettings from './MenuSettings';

type SortSettingsPropsType = {
	title: string;
	sorts: SortType;
	setSorts: Dispatch<SetStateAction<SortType>>;
	sortNameItems: RadioItemType[];
	sortOrderItems: RadioItemType[];
};

const SortSettings = ({
	title,
	sorts,
	setSorts,
	sortNameItems,
	sortOrderItems,
}: SortSettingsPropsType) => {
	const handleChangeSortRadio = (
		e: ChangeEvent<HTMLInputElement>,
		key: string,
	) => {
		setSorts({
			...sorts,
			[key]: (e.target as HTMLInputElement).value,
		});
	};

	return (
		<>
			<MenuSettings
				title={title}
				icon={<SwapVertIcon classes={{ root: 'text-primary-900 text-lg' }} />}
			>
				<Box className='flex flex-col items-start p-0'>
					<SortRadio
						title='Sort by'
						value={sorts?.name}
						onChange={e => handleChangeSortRadio(e, 'name')}
						radioItems={sortNameItems}
					/>

					<Divider
						classes={{
							root: 'w-full !my-0',
						}}
					/>

					<SortRadio
						title='Order by'
						value={sorts?.order}
						onChange={e => handleChangeSortRadio(e, 'order')}
						radioItems={sortOrderItems}
					/>
				</Box>
			</MenuSettings>
		</>
	);
};

export default SortSettings;
