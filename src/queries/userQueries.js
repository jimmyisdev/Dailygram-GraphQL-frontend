import { gql } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      email
      role
    }
  }
`;
const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      name
      email
      tasks {
        name
        description
      }
      peopleMemos {
        name
        organization
      }
      expenditures {
        name
        price
      }
    }
  }
`;

export { GET_USERS, GET_USER };
