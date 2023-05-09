import { gql } from "@apollo/client";

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      name
      email
      password
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: CreateUserInput!) {
    updateUser(id: $id, input: $input) {
      User {
        name
      }
    }
  }
`;

export { DELETE_USER, CREATE_USER, UPDATE_USER };
