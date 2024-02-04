import {
	QuerySeasonsBySerieArgs,
	Season,
	SeasonResponse,
	SerieDetails,
} from '../__generated__/resolvers-types';
import { IContext } from '../context';
import { formatUrlQuery } from '../utils';
import DataServices from './data.services';

class SeasonServices extends DataServices {
	/**
	 * Get seasons by serieId
	 */
	async findBySerieId(
		ctx: IContext,
		args: QuerySeasonsBySerieArgs,
	): Promise<SeasonResponse | null> {
		const { tmdbSerieId } = args;

		const serie = (await this.get(
			formatUrlQuery(`${this.baseURL}/tv/${tmdbSerieId}`, this.apiKey, '', {}),
		).then(d => d)) as SerieDetails;

		return {
			id: serie?.id as number,
			seasons: serie?.seasons,
		};
	}
}

export default SeasonServices;
