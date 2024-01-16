import { QueryResolvers } from '../__generated__/resolvers-types';
import queries from './queries';

const resolvers: QueryResolvers = {
	Query: { ...queries },
};

export default resolvers;
