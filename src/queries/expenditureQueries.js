import { gql } from "@apollo/client";

const GET_EXPENDITURES = gql`
  query getExpenditures {
    expenditures {
      id
      name
      description
      price
    }
  }
`;
const GET_EXPENDITURE = gql`
  query getExpenditure($id: ID!) {
    expenditure(id: $id) {
      name
      description
      createdAt
      user {
        name
      }
    }
  }
`;

export { GET_EXPENDITURES, GET_EXPENDITURE };
