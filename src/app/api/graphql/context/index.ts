import { PrismaClient } from '@prisma/client';
import MovieServices from '../services/movies.services';

export interface IContext {
	prisma: any;
	dataSource: {
		movies: MovieServices;
	};
}

// init client prisma
const prisma = new PrismaClient();

const context: IContext = {
	prisma,
	dataSource: {
		movies: new MovieServices(),
	},
};

export default context;
