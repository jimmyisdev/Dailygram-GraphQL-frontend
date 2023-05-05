import { useLazyQuery } from "@apollo/client";
import DataTable from "components/shared/DataTable/DataTable";
import { TaskDataField, TaskDataHead } from "constants/constans";
import { GET_TASKS } from "queries/taskQueries";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export default function SectTask() {
  const [loadTasks, { called, loading, data, error }] = useLazyQuery(GET_TASKS);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  return (
    <section>
      {/* filter */}
      {/* table */}
      {called && loading && <Spinner />}
      {called && !loading && (
        <DataTable
          sectTitle="task"
          dataHead={TaskDataHead}
          tableField={TaskDataField}
          data={data?.tasks}
        />
      )}
      {!loading && <span>{error}</span>}
    </section>
  );
}
