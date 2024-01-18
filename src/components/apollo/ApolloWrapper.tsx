import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import { makeClient } from '@config/apollo-client';
import { ReactNode } from 'react';

type ApolloWrapperPropsType = {
	children: ReactNode;
};
const ApolloWrapper = ({ children }: ApolloWrapperPropsType) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
};

export default ApolloWrapper;
