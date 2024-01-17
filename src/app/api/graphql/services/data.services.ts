import { RESTDataSource } from '@apollo/datasource-rest';
import { MovieDetails, SerieDetails } from '../__generated__/resolvers-types';
import { formatUrlQuery } from '../utils';

class DataServices extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3';

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
	async findDataDetails(
		type: 'movie' | 'tv',
		args: any,
	): Promise<MovieDetails | SerieDetails> {
		const id = String(args.tmdbMovieId ?? args.tmdbSerieId);

		return this.get(
			formatUrlQuery(`${this.baseURL}/${type}`, this.apiKey, id, {
				language: args?.options?.language,
			}),
		);
	}

	/**
	 * Search movie or serie
	 */
	async searchItems(type: 'movie' | 'tv', args: any): Promise<any> {
		return this.get(
			formatUrlQuery(`${this.baseURL}/search/${type}`, this.apiKey, '', {
				query: args?.searchOptions?.query?.split(' ').join('+'),
				page: args?.searchOptions?.page ?? 1,
				language: 'fr-FR',
				region: 'fr',
			}),
		);
	}
}

export default DataServices;
