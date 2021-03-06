import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';

import resolvers from '../resolvers';
import { GRAPHQL_PATH } from '../constants';
import typeDefs from '../typeDefs';

// TODO unistall all unused packages
const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  app.use(cors());
  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
    })
  );

  await server.start();
  server.applyMiddleware({
    app,
    path: GRAPHQL_PATH,
    cors: false,
  });

  const PORT = process.env.PORT || 4000
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
};

export default startApolloServer;
