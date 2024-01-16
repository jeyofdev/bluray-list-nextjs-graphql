import { PrismaClient } from '@prisma/client';
import MovieServices from '../services/movies.services';
import SerieServices from '../services/series.services';

export interface IContext {
	prisma: any;
	dataSource: {
		movies: MovieServices;
		series: SerieServices;
	};
}

// init client prisma
const prisma = new PrismaClient();

const context: IContext = {
	prisma,
	dataSource: {
		movies: new MovieServices(),
		series: new SerieServices(),
	},
};

export default context;
