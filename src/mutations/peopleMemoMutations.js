import { gql } from "@apollo/client";

const DELETE_PEOPLE_MEMO = gql`
  mutation deletePeopleMemo($id: ID!) {
    deletePeopleMemo(id: $id) 
  }
`;

export { DELETE_PEOPLE_MEMO };
