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
    }
  }
`;

export { DELETE_USER, CREATE_USER };
