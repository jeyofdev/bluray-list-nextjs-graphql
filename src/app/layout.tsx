import RootComponent from '@components/RootComponent';
import ApolloWrapper from '@components/apollo/ApolloWrapper';
import Header from '@components/navigation/Header';
import { CssBaseline } from '@mui/material';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ChildrenType } from '../types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bluray list',
	description: 'Generated by jeyofdev',
};

type RootLayoutPropsType = {
	children: ChildrenType;
};

const RootLayout = ({ children }: RootLayoutPropsType) => {
	return (
		<html lang='en'>
			<RootComponent>
				<CssBaseline />
				<body className={`${inter.className} bg-slate-50`}>
					<ApolloWrapper>
						<Header />
						{children}
					</ApolloWrapper>
				</body>
			</RootComponent>
		</html>
	);
};

export default RootLayout;
