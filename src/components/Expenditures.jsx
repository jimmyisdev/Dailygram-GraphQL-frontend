import { useQuery } from "@apollo/client";
import { GET_EXPENDITURES } from "queries/expenditureQueries";

export default function Expenditures() {
  const { loading, error, data } = useQuery(GET_EXPENDITURES);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>description</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {data.expenditures.map((item) => {
              const { name, description, price, id } = item
              
              return(
                <ul key={id}>
                  <li>{name}</li>
                  <li>{description}</li>
                  <li>{price}</li>
                </ul>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
