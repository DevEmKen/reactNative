import { gql } from "@apollo/client";

// Boilerplate example code from setup
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
  query getProducts($after: Int, $first: Int, $sort: String) {
    getProducts(after: $after, first: $first, sort: $sort) {
      edges {
        node {
          id
          title
          detail
          rating
          img
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
