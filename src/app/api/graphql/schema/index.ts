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

	type Season {
		air_date: String
		episode_count: Int
		id: Int
		name: String
		overview: String
		poster_path: String
		season_number: Int
		vote_average: Float
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

	type SerieDetails {
		id: Int
		backdrop_path: String
		first_air_date: String
		genres: [Genre]
		homepage: String
		name: String
		number_of_episodes: Int
		number_of_seasons: Int
		original_language: String
		original_name: String
		overview: String
		poster_path: String
		production_countries: [ProductionCountry]
		seasons: [Season]
		vote_average: Float
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

	type SerieResponse {
		id: ID
		details: SerieDetails
		season: Int
		support: Support
	}

	input SupportInput {
		bluray: Boolean
		bluray_hd: Boolean
		dvd: Boolean
	}

	type Query {
		movies: [MovieResponse]
		movie(movieId: ID): MovieResponse
	}

	type Mutation {
		addMovie(tmdbMovieId: Int, support: SupportInput): MovieResponse
		updateMovie(movieId: ID, support: SupportInput): MovieResponse
		deleteMovie(movieId: ID): MovieResponse

		addSerie(
			tmdbSerieId: Int
			season: Int
			support: SupportInput
		): SerieResponse
		updateSerie(serieId: ID, season: Int, support: SupportInput): SerieResponse
		deleteSerie(serieId: ID): SerieResponse
	}
`;

export default schema;
