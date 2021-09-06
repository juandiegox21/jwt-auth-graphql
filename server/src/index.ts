import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";

(async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs: `
            type Query {
                hello: String!
            }
        `,
    resolvers: {
      Query: {
        hello: () => "hello world",
      },
    },
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("express server started");
  });
})();
