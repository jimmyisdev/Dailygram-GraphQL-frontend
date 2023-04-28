import { gql } from "@apollo/client";

const GET_PEOPLEMEMOS = gql`
    query getPeopleMemos {
    peopleMemos {
        id
        name
        description
    }
  }
`;
const GET_PEOPLEMEMO = gql`
    query getExpenditure($id: ID) {
    peopleMemo(id: $id) {
        id
        name
        description
    }
  }
`;

export { GET_PEOPLEMEMOS, GET_PEOPLEMEMO };
