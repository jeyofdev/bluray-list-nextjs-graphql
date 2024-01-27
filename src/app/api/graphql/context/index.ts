import { PrismaClient } from '@prisma/client';
import MovieServices from '../services/movies.services';
import SerieServices from '../services/series.services';
import SearchServices from '../services/search.services';
import CreditsServices from '../services/cast.services';

export interface IContext {
	prisma: any;
	dataSource: {
		movies: MovieServices;
		series: SerieServices;
		search: SearchServices;
		credits: CreditsServices;
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
		credits: new CreditsServices(),
	},
};

export default context;
