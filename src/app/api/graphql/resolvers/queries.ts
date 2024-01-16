import { IContext } from '../context';

const queries = {
	movies: (_: never, __: never, ctx: IContext) => {
		return ctx.dataSource.movies.findAll(ctx);
	},
};

export default queries;
