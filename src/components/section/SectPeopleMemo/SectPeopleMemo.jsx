import { useLazyQuery, useQuery } from "@apollo/client";
import DataTable from "components/shared/DataTable/DataTable";
import { PeopleMemoDataField, PeopleMemoDataHead } from "constants/constans";
import { GET_PEOPLEMEMOS } from "queries/peopleMemoQueries";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export default function SectPeopleMemo() {
  const [loadPeopleMemos, { called, loading, data,error }] = useLazyQuery(GET_PEOPLEMEMOS);

  useEffect(() => {
    loadPeopleMemos();
  }, [loadPeopleMemos]);
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
        />
      )}
      {!loading && <span>{error}</span>}
    </section>
  );
}
