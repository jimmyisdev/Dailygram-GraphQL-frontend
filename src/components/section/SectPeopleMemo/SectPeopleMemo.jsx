import { useLazyQuery } from "@apollo/client";
import DataTable from "components/shared/DataTable/DataTable";
import { PeopleMemoDataField, PeopleMemoDataHead } from "constants/constans";
import { DELETE_PEOPLE_MEMO } from "mutations/peopleMemoMutations";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { GET_PEOPLEMEMO, GET_PEOPLEMEMOS } from "queries/peopleMemoQueries";

export default function SectPeopleMemo({currentTab}) {
  const [loadPeopleMemos, { called, loading, data, error }] =
    useLazyQuery(GET_PEOPLEMEMOS);

  useEffect(() => {
    if (currentTab === "connections") loadPeopleMemos();
  }, [loadPeopleMemos, currentTab]);

  return (
    <section>
      {/* filter */}
      {/* table */}
      {called && loading && <Spinner />}
      {called && !loading && (
        <DataTable
          sectTitle="peopleMemo"
          dataHead={PeopleMemoDataHead}
          tableField={PeopleMemoDataField}
          data={data?.peopleMemos}
          //func
          deleteItem={DELETE_PEOPLE_MEMO}
          getItem={GET_PEOPLEMEMO}
          getItems={GET_PEOPLEMEMOS}
        />
      )}
      {!loading && <span>{error}</span>}
    </section>
  );
}
