import {
	QueryMovieArgs,
	QueryMovieCreditsArgs,
	QuerySeasonsBySerieArgs,
	QuerySerieArgs,
} from '../__generated__/resolvers-types';
import { IContext } from '../context';

const queries = {
	movies: (_: never, __: never, ctx: IContext) => {
		return ctx.dataSource.movies.findAll(ctx);
	},
	movie: (_: never, args: QueryMovieArgs, ctx: IContext) => {
		return ctx.dataSource.movies.findById(ctx, args);
	},
	series: (_: never, __: never, ctx: IContext) => {
		return ctx.dataSource.series.findAll(ctx);
	},
	serie: (_: never, args: QuerySerieArgs, ctx: IContext) => {
		return ctx.dataSource.series.findById(ctx, args);
	},
	searchMovies: (_: never, args: any, ctx: IContext) => {
		return ctx.dataSource.search.searchByName('movie', args);
	},
	searchSeries: (_: never, args: any, ctx: IContext) => {
		return ctx.dataSource.search.searchByName('tv', args);
	},
	movieCredits: (_: never, args: QueryMovieCreditsArgs, ctx: IContext) => {
		return ctx.dataSource.credits.findAllCastAndCrew('movie', args);
	},
	serieCredits: (_: never, args: QueryMovieCreditsArgs, ctx: IContext) => {
		return ctx.dataSource.credits.findAllCastAndCrew('tv', args);
	},
	seasonsBySerie: async (
		_: never,
		args: QuerySeasonsBySerieArgs,
		ctx: IContext,
	) => {
		return ctx.dataSource.seasons.findBySerieId(ctx, args);
	},
};

export default queries;
