import { PrismaClient } from '@prisma/client';
import MovieServices from '../services/movies.services';
import SerieServices from '../services/series.services';
import SearchServices from '../services/search.services';
import CreditsServices from '../services/cast.services';
import SeasonServices from '../services/season.services';

export interface IContext {
	prisma: any;
	dataSource: {
		movies: MovieServices;
		series: SerieServices;
		search: SearchServices;
		credits: CreditsServices;
		seasons: SeasonServices;
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
		seasons: new SeasonServices(),
	},
};

export default context;
