import { MovieResponse } from '../__generated__/resolvers-types';
import { IContext } from '../context';

class MovieServices {
	/**
	 * Get all movies
	 */
	async findAll(ctx: IContext): Promise<MovieResponse[]> {
		return ctx.prisma.movies.findMany();
	}
}

export default MovieServices;
