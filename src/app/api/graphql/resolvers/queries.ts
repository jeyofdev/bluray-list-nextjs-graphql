import { QueryMovieArgs } from '../__generated__/resolvers-types';
import { IContext } from '../context';

const queries = {
	movies: (_: never, __: never, ctx: IContext) => {
		return ctx.dataSource.movies.findAll(ctx);
	},
	movie: (_: never, args: QueryMovieArgs, ctx: IContext) => {
		return ctx.dataSource.movies.findById(ctx, args);
	},
};

export default queries;
