import { PrismaClient } from '@prisma/client';
import MovieServices from '../services/movies.services';
import SerieServices from '../services/series.services';
import SearchServices from '../services/search.services';

export interface IContext {
	prisma: any;
	dataSource: {
		movies: MovieServices;
		series: SerieServices;
		search: SearchServices;
	};
}

// init client prisma
const prisma = new PrismaClient();

const context: IContext = {
	prisma,
	dataSource: {
		movies: new MovieServices(),
		series: new SerieServices(),
		search: new SearchServices(),
	},
};

export default context;
