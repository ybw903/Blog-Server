import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import posts from "./data/posts";

const typeDef = gql`
  type Query {
    helloWorld: String!
    getPosts: [Post!]!
  }

  type Post {
    id: ID!
    title: String
    content: String
  }
`;

const resolverMap = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `Hello GraphQL~!`;
    },
    getPosts() {
      return posts;
    },
  },
};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDef],
  resolvers: [resolverMap],
});

export default schema;
