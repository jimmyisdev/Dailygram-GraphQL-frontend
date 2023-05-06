import { useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";

export default function DeleteUser({ id, getAllItems, deleteItem }) {
  const [deleteItemFunc, { data, loading, error }] = useMutation(deleteItem, {
    refetchQueries: [{ query: getAllItems }],
  });
  return (
    <Button
      variant="secondary"
      onClick={() => deleteItemFunc({ variables: { id: id } })}
    >
      {loading ? "Processing" : "Delete"}
    </Button>
  );
}
