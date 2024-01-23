import { useState } from 'react';
import { SupportType } from '../types';
import { SupportEnum } from '@enums/index';

type UseSupportType = {
	movieSupports: SupportType;
	onChange: (support: SupportEnum) => void;
};

const useSupport = (): UseSupportType => {
	const [movieSupports, setMovieSupports] = useState<SupportType>({
		bluray: false,
		bluray_hd: false,
		dvd: false,
	});

	const onChange = (support: SupportEnum) => {
		setMovieSupports({
			...movieSupports,
			[support]: !movieSupports[support],
		});
	};

	return { movieSupports, onChange };
};

export default useSupport;
