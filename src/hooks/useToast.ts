import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';

type ToastType = {
	open: boolean;
	message: string;
};

export type ToastOnCloseType = (
	e: SyntheticEvent | Event,
	reason?: string,
) => void;

type UseToastType = {
	toast: ToastType;
	onClose: ToastOnCloseType;
	onOpen: (message: string) => void;
};

const useToast = (): UseToastType => {
	const [toast, setToast] = useState({
		open: false,
		message: '',
	});

	const onClose: ToastOnCloseType = (
		e: SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setToast({
			open: false,
			message: '',
		});
	};

	const onOpen = (message: string) => {
		setToast({
			open: true,
			message: message,
		});
	};

	return { toast, onClose, onOpen };
};

export default useToast;
