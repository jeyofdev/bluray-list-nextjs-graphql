import { useState } from 'react';
import { SupportType } from '../types';
import { SupportEnum } from '@enums/index';

type UseSupportType = {
	itemSupports: SupportType;
	onChange: (support: SupportEnum) => void;
	cheKIfOneSupportIsActive: () => boolean;
};

const useSupport = (supports?: SupportType): UseSupportType => {
	const [itemSupports, setItemSupports] = useState<SupportType>({
		bluray: supports?.bluray ?? false,
		bluray_hd: supports?.bluray_hd ?? false,
		dvd: supports?.dvd ?? false,
	});

	const onChange = (support: SupportEnum) => {
		setItemSupports({
			...itemSupports,
			[support]: !itemSupports[support],
		});
	};

	const cheKIfOneSupportIsActive = () => {
		return Object.values(itemSupports).some(support => support);
	};

	return { itemSupports, onChange, cheKIfOneSupportIsActive };
};

export default useSupport;
