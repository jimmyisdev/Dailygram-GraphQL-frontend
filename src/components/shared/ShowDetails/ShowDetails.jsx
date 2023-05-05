import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "queries/userQueries";
import React, {  useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserDetails from "./UserDetails";

export default function ShowDetails({ sectTitle, id }) {
  const [show, setShow] = useState(false);
  const [loadUser, { called, loading, data }] = useLazyQuery(GET_USER);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    loadUser({ variables: { id } });
  };
  function handleFetchDetails() {
    // switch (sectTitle) {
    //   case "user":
    //     return deleteUser({ variables: { id: id } });
    //   case "task":
    //     return deleteTask({ variables: { id: id } });
    //   case "peopleMemo":
    //     return deletePeopleMemo({ variables: { id: id } });
    //   case "expenditure":
    //     return deleteExpenditure({ variables: { id: id } });
    //   default:
    //     return;
    // }
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {called && loading && <Spinner />}
        {called && !loading && sectTitle === "user" && <UserDetails data={data.user}/>}
        {/* {called && !loading && sectTitle === "task" && <UserDetails data={data.task}/>} */}
        {/* {called && !loading && sectTitle === "expenditure" && <UserDetails data={data.expenditure}/>} */}
        {/* {called && !loading && sectTitle === "peopleMemo" && <UserDetails data={data.peopleMemo}/>} */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
