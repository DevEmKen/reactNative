import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type Todo {
    id: ID
    totle: String
    detail: String
    date: Date
  }

  type Query {
    welcome: String
    getTodos: [Todo]
  }
`;

export default typeDefs;
