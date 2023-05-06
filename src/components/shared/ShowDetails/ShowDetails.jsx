import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserDetails from "./UserDetails";
import SharedDetails from "./SharedDetails";

export default function ShowDetails({ sectTitle, id, getItem }) {
  const [loadUser, { called, loading, data }] = useLazyQuery(getItem);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    loadUser({ variables: { id } });
  };
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
        {called && !loading && sectTitle === "user" && (
          <UserDetails data={data.user} />
        )}
        {called && !loading && sectTitle === "task" && (
          <SharedDetails sectTitle={sectTitle} data={data?.task} />
        )}
        {called && !loading && sectTitle === "expenditure" && (
          <SharedDetails sectTitle={sectTitle} data={data?.expenditure} />
        )}
        {called && !loading && sectTitle === "peopleMemo" && (
          <SharedDetails sectTitle={sectTitle} data={data?.peopleMemo} />
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
