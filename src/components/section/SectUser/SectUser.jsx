import { useLazyQuery } from "@apollo/client";
import DataTable from "components/shared/DataTable/DataTable";
import { UserDataField, UserDataHead } from "constants/constans";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import { DELETE_USER } from "mutations/userMutations";
import { GET_USERS } from "queries/userQueries";
import { GET_USER } from "queries/userQueries";
import AddUserItem from "components/shared/AddUserItem/AddUserItem";

export default function SectUser() {
  const [loadUsers, { called, loading, data, error }] = useLazyQuery(GET_USERS);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  return (
    <section>
      {/* filter */}
      <AddUserItem/>
      {/* table */}
      {called && loading && <Spinner />}
      {called && !loading && (
        <DataTable
          sectTitle="user"
          dataHead={UserDataHead}
          tableField={UserDataField}
          data={data?.users}
          
          //func
          deleteItem={DELETE_USER}
          getItem={GET_USER }
          getItems={GET_USER}
        />
      )}
      {!loading && <span>{error}</span>}
    </section>
  );
}
