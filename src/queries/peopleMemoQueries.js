import { gql } from "@apollo/client";

const GET_PEOPLEMEMOS = gql`
  query getPeopleMemos {
    peopleMemos {
      id
      name
      organization
      place
    }
  }
`;
const GET_PEOPLEMEMO = gql`
  query getExpenditure($id: ID!) {
    peopleMemo(id: $id) {
      name
      description
      createdAt
      user {
        name
      }
    }
  }
`;

export { GET_PEOPLEMEMOS, GET_PEOPLEMEMO };
