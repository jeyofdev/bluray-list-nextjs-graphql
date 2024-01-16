import {
	MovieDetails,
	MovieResponse,
	MutationAddMovieArgs,
	MutationDeleteMovieArgs,
	MutationUpdateMovieArgs,
	QueryMovieArgs,
} from '../__generated__/resolvers-types';
import { IContext } from '../context';
import DataServices from './data.services';

class MovieServices extends DataServices {
	/**
	 * Get all movies
	 */
	async findAll(ctx: IContext): Promise<MovieResponse[]> {
		return ctx.prisma.movies.findMany();
	}

	/**
	 * Get movie by ID
	 */
	async findById(ctx: IContext, args: QueryMovieArgs): Promise<MovieResponse> {
		const { movieId } = args;

		return ctx.prisma.movies.findUnique({
			where: { id: movieId },
		});
	}

	/**
	 * Add new movie
	 */
	async add(ctx: IContext, args: MutationAddMovieArgs): Promise<MovieResponse> {
		const { tmdbMovieId } = args;

		const TMDB_movie = await (
			this.findDataDetails('movie', {
				tmdbMovieId,
				options: {
					language: 'fr',
				},
			}) as Promise<MovieDetails>
		).then(details => details);

		return ctx.prisma.movies.create({
			data: {
				details: {
					id: TMDB_movie.id,
					title: TMDB_movie.title,
					original_title: TMDB_movie.original_title,
					homepage: TMDB_movie.homepage,
					overview: TMDB_movie.overview,
					backdrop_path: TMDB_movie.backdrop_path,
					poster_path: TMDB_movie.poster_path,
					genres: TMDB_movie.genres,
					original_language: TMDB_movie.original_language,
					release_date: TMDB_movie.release_date,
					vote_average: TMDB_movie.vote_average,
					production_countries: TMDB_movie.production_countries,
				},
				support: {
					bluray: args.support?.bluray,
					bluray_hd: args.support?.bluray_hd,
					dvd: args.support?.dvd,
				},
			},
		});
	}

	/**
	 * update movie data by ID
	 */
	async updateById(
		ctx: IContext,
		args: MutationUpdateMovieArgs,
	): Promise<MovieResponse> {
		const { movieId } = args;

		const movieToUpdate = await ctx.prisma.movies.findUnique({
			where: { id: movieId },
		});

		return ctx.prisma.movies.update({
			where: { id: movieId },
			data: {
				details: movieToUpdate.details,
				support: args.support ?? movieToUpdate.support,
			},
		});
	}

	/**
	 * Delete movie by ID
	 */
	async deleteById(
		ctx: IContext,
		args: MutationDeleteMovieArgs,
	): Promise<MovieResponse> {
		const { movieId } = args;

		return ctx.prisma.movies.delete({
			where: { id: movieId },
		});
	}
}

export default MovieServices;
