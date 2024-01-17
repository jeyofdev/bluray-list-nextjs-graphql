import {
	MutationAddMovieArgs,
	MutationAddSerieArgs,
	MutationDeleteMovieArgs,
	MutationDeleteSerieArgs,
	MutationResolvers,
	MutationUpdateMovieArgs,
	MutationUpdateSerieArgs,
} from '../__generated__/resolvers-types';
import { IContext } from '../context';

const mutations: MutationResolvers = {
	addMovie: async (_: never, args: MutationAddMovieArgs, ctx: IContext) => {
		return ctx.dataSource.movies.add(ctx, args);
	},

	updateMovie: async (
		_: never,
		args: MutationUpdateMovieArgs,
		ctx: IContext,
	) => {
		return ctx.dataSource.movies.updateById(ctx, args);
	},

	deleteMovie: async (
		_: never,
		args: MutationDeleteMovieArgs,
		ctx: IContext,
	) => {
		return ctx.dataSource.movies.deleteById(ctx, args);
	},

	addSerie: async (_: never, args: MutationAddSerieArgs, ctx: IContext) => {
		return ctx.dataSource.series.add(ctx, args);
	},

	updateSerie: async (
		_: never,
		args: MutationUpdateSerieArgs,
		ctx: IContext,
	) => {
		return ctx.dataSource.series.updateById(ctx, args);
	},

	deleteSerie: (_: never, args: MutationDeleteSerieArgs, ctx: IContext) => {
		return ctx.dataSource.series.deleteById(ctx, args);
	},
};

export default mutations;
