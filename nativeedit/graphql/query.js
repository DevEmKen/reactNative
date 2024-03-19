import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  {
    getTodos {
      id
      title
      detail
      date
    }
  }
`;

export const GET_PRODUCTS = gql`
  {
    getProducts {
      id
      title
      detail
      rating
      img
    }
  }
`;
