import {
	MutationAddMovieArgs,
	MutationResolvers,
} from '../__generated__/resolvers-types';
import { IContext } from '../context';

const mutations: MutationResolvers = {
	addMovie: async (_: never, args: MutationAddMovieArgs, ctx: IContext) => {
		return ctx.dataSource.movies.add(ctx, args);
	},
};

export default mutations;
