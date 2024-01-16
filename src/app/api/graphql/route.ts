import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import schema from './schema';
import resolvers from './resolvers';
import context from './context';

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
	context: async () => context,
});

export { handler as GET, handler as POST };
