import { gql } from "@apollo/client";

const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      name
      level
      isCompleted
    }
  }
`;
const GET_TASK = gql`
  query getTask($id: ID!) {
    task(id: $id) {
      name
      description
      createdAt
      user {
        name
      }
    }
  }
`;

export { GET_TASKS, GET_TASK };
