import {
	CreditsResponse,
	QueryMovieCreditsArgs,
	QuerySerieCreditsArgs,
} from '../__generated__/resolvers-types';
import { formatUrlQuery } from '../utils';
import DataServices from './data.services';

class CreditsServices extends DataServices {
	async findAllCastAndCrew(
		type: 'movie' | 'tv',
		args: QueryMovieCreditsArgs | QuerySerieCreditsArgs,
	): Promise<CreditsResponse> {
		return this.get(
			formatUrlQuery(
				`${this.baseURL}/${type}/${args.itemId}/credits`,
				this.apiKey,
				'',
				{},
			),
		);
	}
}

export default CreditsServices;
