import { gql } from 'graphql-tag';

const schema = gql`
	type Query {
		hello: String
	}
`;

export default schema;
