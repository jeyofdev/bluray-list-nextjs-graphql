import { IconButton } from '@mui/material';
import { ChildrenType } from '../../../types';

type ButtonActionPropsType = {
	icon: ChildrenType;
	onClick: () => void;
};

export const ButtonAction = ({ icon, onClick }: ButtonActionPropsType) => {
	return (
		<IconButton
			size='large'
			classes={{
				root: 'border-4 border-solid border-primary-900 bg-primary-900 hover:bg-red-50 text-primary-50 hover:text-primary-900',
			}}
			onClick={onClick}
		>
			{icon}
		</IconButton>
	);
};
