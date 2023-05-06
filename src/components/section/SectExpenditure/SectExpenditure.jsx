import { useLazyQuery } from "@apollo/client";
import DataTable from "components/shared/DataTable/DataTable";
import { ExpenditureDataField, ExpenditureDataHead } from "constants/constans";
import { DELETE_EXPENDITURE } from "mutations/expenditureMutations";
import { GET_EXPENDITURE, GET_EXPENDITURES } from "queries/expenditureQueries";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export default function SectExpenditure() {
  const [loadExpenditures, { called, loading, data, error }] =
    useLazyQuery(GET_EXPENDITURES);

  useEffect(() => {
    loadExpenditures();
  }, [loadExpenditures]);
  return (
    <section>
      {/* filter */}
      {/* table */}
      {called && loading && <Spinner />}
      {called && !loading && (
        <DataTable
          sectTitle="expenditure"
          dataHead={ExpenditureDataHead}
          tableField={ExpenditureDataField}
          data={data?.expenditures}
          //func
          deleteItem={DELETE_EXPENDITURE}
          getItem={GET_EXPENDITURE}
          getItems={GET_EXPENDITURES}
        />
      )}
      {!loading && <span>{error}</span>}
    </section>
  );
}
