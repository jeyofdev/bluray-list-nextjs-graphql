import { gql } from 'graphql-tag';

const schema = gql`
	scalar DateTime

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

	type Cast {
		gender: Int
		id: Int
		known_for_department: String
		name: String
		original_name: String
		profile_path: String
		cast_id: Int
		character: String
		credit_id: String
	}

	type Crew {
		gender: Int
		id: Int
		known_for_department: String
		name: String
		original_name: String
		profile_path: String
		credit_id: String
		department: String
		job: String
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
		runtime: Int
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
		created_at: DateTime
	}

	type SerieResponse {
		id: ID
		details: SerieDetails
		season: Int
		support: Support
		created_at: DateTime
	}

	type SeasonResponse {
		id: Int
		seasons: [Season]
	}

	type SearchMovieResponse {
		page: Int!
		results: [MovieDetails]!
		total_pages: Int!
		total_results: Int!
	}

	type SearchSerieResponse {
		page: Int!
		results: [SerieDetails]!
		total_pages: Int!
		total_results: Int!
	}

	type creditsResponse {
		id: Int
		cast: [Cast]
		crew: [Crew]
	}

	input SupportInput {
		bluray: Boolean
		bluray_hd: Boolean
		dvd: Boolean
	}

	input SearchOptionsInput {
		query: String
		page: Int
		# language: String
		# region: String
	}

	input SeasonOptionsInput {
		query: String
		page: Int
		# language: String
		# region: String
	}

	type Query {
		movies: [MovieResponse]
		movie(movieId: ID): MovieResponse
		series: [SerieResponse]
		serie(serieId: ID): SerieResponse
		movieCredits(itemId: Int): creditsResponse
		serieCredits(itemId: Int): creditsResponse
		searchMovies(searchOptions: SearchOptionsInput): SearchMovieResponse
		searchSeries(searchOptions: SearchOptionsInput): SearchSerieResponse
		seasonsBySerie(tmdbSerieId: Int): SeasonResponse
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
