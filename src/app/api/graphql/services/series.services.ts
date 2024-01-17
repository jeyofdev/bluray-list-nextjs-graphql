import {
	MutationAddSerieArgs,
	MutationDeleteSerieArgs,
	MutationUpdateSerieArgs,
	SerieDetails,
	SerieResponse,
} from '../__generated__/resolvers-types';
import { IContext } from '../context';
import DataServices from './data.services';

class SerieServices extends DataServices {
	/**
	 * Add new serie
	 */
	async add(ctx: IContext, args: MutationAddSerieArgs): Promise<SerieResponse> {
		const { tmdbSerieId } = args;

		const TMDB_serie = await (
			this.findDataDetails('tv', {
				tmdbSerieId,
				options: {
					language: 'fr',
				},
			}) as Promise<SerieDetails>
		).then(details => details);

		return ctx.prisma.series.create({
			data: {
				details: {
					id: TMDB_serie.id,
					backdrop_path: TMDB_serie.backdrop_path,
					first_air_date: TMDB_serie.first_air_date,
					genres: TMDB_serie.genres,
					homepage: TMDB_serie.homepage,
					name: TMDB_serie.name,
					number_of_episodes: TMDB_serie.number_of_episodes,
					number_of_seasons: TMDB_serie.number_of_seasons,
					original_language: TMDB_serie.original_language,
					original_name: TMDB_serie.original_name,
					overview: TMDB_serie.overview,
					poster_path: TMDB_serie.poster_path,
					production_countries: TMDB_serie.production_countries,
					seasons: TMDB_serie.seasons,
					vote_average: TMDB_serie.vote_average,
				},
				season: args.season,
				support: {
					bluray: args.support?.bluray,
					bluray_hd: args.support?.bluray_hd,
					dvd: args.support?.dvd,
				},
			},
		});
	}

	/**
	 * update serie data by Id
	 */
	async updateById(
		ctx: IContext,
		args: MutationUpdateSerieArgs,
	): Promise<SerieResponse> {
		const { serieId } = args;

		const serieToUpdate = await ctx.prisma.series.findUnique({
			where: { id: serieId },
		});

		return ctx.prisma.series.update({
			where: { id: serieId },
			data: {
				details: serieToUpdate.details,
				season: args.season ?? serieToUpdate.season,
				support: args.support ?? serieToUpdate.support,
			},
		});
	}

	/**
	 * Delete serie by ID
	 */
	async deleteById(
		ctx: IContext,
		args: MutationDeleteSerieArgs,
	): Promise<SerieResponse> {
		const { serieId } = args;

		return ctx.prisma.series.delete({
			where: { id: serieId },
		});
	}
}

export default SerieServices;
