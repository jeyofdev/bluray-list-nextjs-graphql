import { ToastOnCloseType } from '@hooks/useToast';
import { ReactNode } from 'react';

export type ChildrenType = ReactNode;

export type PageType = {
	id: string;
	path: string;
	label: string;
};

export type SupportType = {
	bluray: boolean;
	bluray_hd: boolean;
	dvd: boolean;
};

export type ToastType = {
	onOpen: (message: string) => void;
	onClose: ToastOnCloseType;
};
