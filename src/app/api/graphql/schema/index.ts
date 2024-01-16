import { gql } from 'graphql-tag';

const schema = gql`
	type Genre {
		id: Int
		name: String
	}

	type ProductionCountry {
		iso_3166_1: String
		name: String
	}

	type MovieDetails {
		id: Int
		title: String
		original_title: String
		homepage: String
		overview: String
		backdrop_path: String
		poster_path: String
		genres: [Genre]
		original_language: String
		release_date: String
		vote_average: Float
		production_countries: [ProductionCountry]
	}

	type Support {
		bluray: Boolean
		bluray_hd: Boolean
		dvd: Boolean
	}

	type MovieResponse {
		id: ID
		details: MovieDetails
		support: Support
	}

	input SupportInput {
		bluray: Boolean
		bluray_hd: Boolean
		dvd: Boolean
	}

	type Query {
		movies: [MovieResponse]
	}

	type Mutation {
		addMovie(tmdbMovieId: Int, support: SupportInput): MovieResponse
	}
`;

export default schema;
