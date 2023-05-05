import { useMutation } from "@apollo/client";
import { DELETE_EXPENDITURE } from "mutations/expenditureMutations";
import { DELETE_PEOPLE_MEMO } from "mutations/peopleMemoMutations";
import { DELETE_TASK } from "mutations/tasksMutations";
import { DELETE_USER } from "mutations/userMutations";
import { GET_EXPENDITURES } from "queries/expenditureQueries";
import { GET_PEOPLEMEMOS } from "queries/peopleMemoQueries";
import { GET_TASKS } from "queries/taskQueries";
import { GET_USERS } from "queries/userQueries";
import React from "react";
import { Button } from "react-bootstrap";

export default function DeleteUser({ sectTitle, id }) {
  const [
    deleteUser,
    { data: user_data, loading: user_loading, error: user_error },
  ] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });
  const [
    deleteTask,
    { data: task_data, loading: task_loading, error: task_error },
  ] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });
  const [
    deletePeopleMemo,
    {
      data: peopelMemo_data,
      loading: peopelMemo_loading,
      error: peopelMemo__error,
    },
  ] = useMutation(DELETE_PEOPLE_MEMO, {
    refetchQueries: [{ query: GET_PEOPLEMEMOS }],
  });
  const [
    deleteExpenditure,
    {
      data: expenditure_data,
      loading: expenditure_loading,
      error: expenditure_data_error,
    },
  ] = useMutation(DELETE_EXPENDITURE, {
    refetchQueries: [{ query: GET_EXPENDITURES }],
  });

  function handleDeleteBtn() {
    switch (sectTitle) {
      case "user":
        return deleteUser({ variables: { id: id } });
      case "task":
        return deleteTask({ variables: { id: id } });
      case "peopleMemo":
        return deletePeopleMemo({ variables: { id: id } });
      case "expenditure":
        return deleteExpenditure({ variables: { id: id } });
      default:
        return;
    }
  }

  return (
    <Button variant="secondary" onClick={handleDeleteBtn}>
      {user_loading || task_loading || peopelMemo_loading || expenditure_loading
        ? "Processing..."
        : "Delete"}
    </Button>
  );
}
