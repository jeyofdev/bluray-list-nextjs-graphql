import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import { makeClient } from '@config/apollo-client';
import { ChildrenType } from '../../types';

type ApolloWrapperPropsType = {
	children: ChildrenType;
};
const ApolloWrapper = ({ children }: ApolloWrapperPropsType) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
};

export default ApolloWrapper;
