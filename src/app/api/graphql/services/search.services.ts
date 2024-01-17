import {
	QuerySearchMoviesArgs,
	SearchMovieResponse,
	SearchSerieResponse,
} from '../__generated__/resolvers-types';
import { formatUrlQuery } from '../utils';
import DataServices from './data.services';

class SearchServices extends DataServices {
	/**
	 * Search movie or serie
	 */
	async searchItems(
		type: 'movie' | 'tv',
		args: any,
	): Promise<SearchMovieResponse | SearchSerieResponse> {
		return this.get(
			formatUrlQuery(`${this.baseURL}/search/${type}`, this.apiKey, '', {
				query: args?.searchOptions?.query?.split(' ').join('+'),
				page: args?.searchOptions?.page ?? 1,
				language: 'fr-FR',
				region: 'fr',
			}),
		);
	}

	/**
	 * Search movie by title
	 */
	async searchByName(
		type: 'movie' | 'tv',
		args: QuerySearchMoviesArgs,
	): Promise<SearchMovieResponse | SearchSerieResponse> {
		return await this.searchItems(type, args);
	}
}

export default SearchServices;
