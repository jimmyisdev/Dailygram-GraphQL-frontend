import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

export default function SharedDetails({ sectTitle, data }) {
  const { description = "Not given", createdAt, user } = data;
  const date = new Date(Number(createdAt) * 1000).toString();

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          {sectTitle.toUpperCase()}-{data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Details : {description}</ListGroup.Item>
          <ListGroup.Item>Created At : {date}</ListGroup.Item>
          <ListGroup.Item>Created By : {user.name}</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </>
  );
}
