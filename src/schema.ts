import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-express";
import { GraphQLSchema } from "graphql";

const typeDef = gql`
  type Query {
    helloWorld: String!
  }
`;

const resolverMap = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `Hello GraphQL~!`;
    },
  },
};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDef],
  resolvers: [resolverMap],
});

export default schema;
