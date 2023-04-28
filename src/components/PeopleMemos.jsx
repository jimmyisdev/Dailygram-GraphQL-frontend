import { useQuery } from "@apollo/client";
import { GET_PEOPLEMEMOS } from "queries/peopleMemoQueries";

export default function PeopleMemos() {
  const { loading, error, data } = useQuery(GET_PEOPLEMEMOS);

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
            </tr>
          </thead>
          <tbody>
            {data.peopleMemos.map((item) => {
              const { name, description, id } = item
              
              return(
                <ul key={id}>
                  <li>{name}</li>
                  <li>{description}</li>
                </ul>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
