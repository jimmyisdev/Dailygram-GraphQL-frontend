import { useLazyQuery } from "@apollo/client";
import DataTable from "components/shared/DataTable/DataTable";
import { TaskDataField, TaskDataHead } from "constants/constans";
import { DELETE_TASK } from "mutations/tasksMutations";
import { GET_TASK, GET_TASKS } from "queries/taskQueries";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export default function SectTask({ currentTab }) {
  const [loadTasks, { called, loading, data, error }] = useLazyQuery(GET_TASKS);

  useEffect(() => {
    if (currentTab === "tasks") loadTasks();
  }, [loadTasks, currentTab]);

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
          //func
          deleteItem={DELETE_TASK}
          getItem={GET_TASK}
          getItems={GET_TASKS}
        />
      )}
      {!loading && <span>{error}</span>}
    </section>
  );
}
