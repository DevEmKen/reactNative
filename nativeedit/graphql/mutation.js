import { gql } from "@apollo/client";

// Boilerplate example code from setup
export const ADD_TODO = gql`
  mutation addTodo($title: String, $detail: String) {
    addTodo(title: $title, detail: $detail) {
      id
      title
      detail
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($title: String, $detail: String, $img: String) {
    addProduct(title: $title, detail: $detail, img: $img) {
      id
      title
      detail
      img
    }
  }
`;
