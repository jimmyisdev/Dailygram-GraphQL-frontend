import { gql } from "@apollo/client";

const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) 
  }
`;

export { DELETE_TASK };
