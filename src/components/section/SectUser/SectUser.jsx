import { useLazyQuery, useQuery } from "@apollo/client";
import DataTable from "components/shared/DataTable/DataTable";
import { UserDataField, UserDataHead } from "constants/constans";
import { GET_USERS } from "queries/userQueries";
import { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';


export default function SectUser() {
  const [loadUsers, { called, loading, data, error }] = useLazyQuery(GET_USERS);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  return (
    <section>
      {/* filter */}
      {/* table */}
      {called && loading && <Spinner />}
      {called && !loading && (
        <DataTable
        sectTitle="user"
          dataHead={UserDataHead}
          tableField={UserDataField}
          data={data?.users}
        />
      )}
      {!loading && <span>{error}</span>}
    </section>
  );
}
