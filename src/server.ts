import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import schema from "./schema";

const app = express();
const server = new ApolloServer({
  schema,
});

app.use(compression());

server.start().then((_) => {
  server.applyMiddleware({ app, path: "/graphql" });
});

const httpServer = createServer(app);

httpServer.listen({ port: 8080 }, () => console.log("server start!"));
