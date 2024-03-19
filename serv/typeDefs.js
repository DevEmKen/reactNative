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

  type Todo {
    id: ID
    title: String
    detail: String
    date: Date
  }

  type Query {
    getProducts: [Product]
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
