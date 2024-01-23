import { useState } from 'react';
import { SupportType } from '../types';
import { SupportEnum } from '@enums/index';

type UseSupportType = {
	itemSupports: SupportType;
	onChange: (support: SupportEnum) => void;
};

const useSupport = (): UseSupportType => {
	const [itemSupports, setItemSupports] = useState<SupportType>({
		bluray: false,
		bluray_hd: false,
		dvd: false,
	});

	const onChange = (support: SupportEnum) => {
		setItemSupports({
			...itemSupports,
			[support]: !itemSupports[support],
		});
	};

	return { itemSupports, onChange };
};

export default useSupport;
