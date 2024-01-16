import { RESTDataSource } from '@apollo/datasource-rest';
import { MovieDetails } from '../__generated__/resolvers-types';
import { formatUrlQuery } from '../utils';

class DataServices extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/movie';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = process.env.TMDB_API_KEY;
	}

	/**
	 * get data movie details
	 */
	async findDataDetails(args: any): Promise<MovieDetails> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, String(args.tmdbMovieId), {
				language: args?.options?.language,
			}),
		);
	}
}

export default DataServices;
