import {
	QuerySearchMoviesArgs,
	SearchMovieResponse,
} from '../__generated__/resolvers-types';
import DataServices from './data.services';

class SearchServices extends DataServices {
	/**
	 * Search movie by title
	 */
	async searchByName(
		args: QuerySearchMoviesArgs,
	): Promise<SearchMovieResponse> {
		return await this.searchItems('movie', args);
	}
}

export default SearchServices;
