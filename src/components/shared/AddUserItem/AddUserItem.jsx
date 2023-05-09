import { useMutation } from "@apollo/client";
import { CREATE_USER } from "mutations/userMutations";
import { GET_USERS } from "queries/userQueries";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
const userDataField = [
  { fieldName: "name", fieldLabel: "" },
  { fieldName: "email", fieldLabel: "" },
  { fieldName: "password", fieldLabel: "" },
];
export default function AddUserItem() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleSubmit() {
    createUser({ variables: { input: userData } });
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add user
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {userDataField.map((item) => {
              const { fieldName } = item;
              return (
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  key={fieldName}
                >
                  <Form.Label>User {fieldName}</Form.Label>
                  <Form.Control
                    type="text"
                    name={fieldName}
                    onChange={handleChange}
                  />
                </Form.Group>
              );
            })}
            {error && <span>{error}</span>}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              {loading ? "Submitting" : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
