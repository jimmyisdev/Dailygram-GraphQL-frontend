import { gql } from "@apollo/client";

const GET_EXPENDITURES = gql`
    query getExpenditures{
        expenditures{
            id
            name
            description
            price
        }
    }
`;
const GET_EXPENDITURE = gql`
    query getExpenditure($id: ID){
        expenditure(id: $id){
            id
            name
            description
            price
        }
    }
`;

export { GET_EXPENDITURES, GET_EXPENDITURE };
