import { gql } from "@apollo/client";

const DELETE_EXPENDITURE = gql`
  mutation deleteExpenditure($id: ID!) {
    deleteExpenditure(id: $id)
  }
`;

export { DELETE_EXPENDITURE };
