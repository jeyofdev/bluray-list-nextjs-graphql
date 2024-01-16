import { gql } from 'graphql-tag';

const schema = gql`
	type MovieResponse {
		id: ID
		title: String
	}

	type Query {
		movies: [MovieResponse]
	}
`;

export default schema;
