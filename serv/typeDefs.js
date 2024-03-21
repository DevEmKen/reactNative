import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type Product {
    id: ID
    title: String
    detail: String
    img: String
    rating: Float
  }

  type ProductEdge {
    node: Product!
    cursor: String!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  type ProductConnection {
    edges: [ProductEdge!]!
    pageInfo: PageInfo!
  }

  type Todo {
    id: ID
    title: String
    detail: String
    date: Date
  }

  type Query {
    getProducts(after: Int, first: Int, sort: String): ProductConnection!
    getProduct(id: ID): Product
    welcome: String
    getTodos: [Todo]
    getTodo(id: ID): Todo
  }

  type Mutation {
    addProduct(title: String, detail: String, img: String): Product
    addTodo(title: String, detail: String, date: Date): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, title: String, detail: String, date: Date): String
  }
`;

export default typeDefs;
