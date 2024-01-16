import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import schema from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
