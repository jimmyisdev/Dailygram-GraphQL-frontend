import { Accordion, ListGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function UserDetails({ data }) {
  const { name, expenditures, peopleMemos, tasks } = data;
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {expenditures.length} expenditues
            </Accordion.Header>
            <Accordion.Body>
              {expenditures.length === 0 && <span>No expenditure record</span>}
              {expenditures.length > 0 && (
                <ListGroup>
                  {expenditures.map((item) => {
                    const { name: itemName, price } = item;
                    return (
                      <ListGroup.Item key={name + itemName}>
                        {itemName}-{price}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{tasks.length} tasks</Accordion.Header>
            <Accordion.Body>
              {tasks.length === 0 && <span>No task record</span>}
              {tasks.length > 0 && (
                <ListGroup>
                  {tasks.map((item) => {
                    const { name: itemName, description } = item;
                    return (
                      <ListGroup.Item key={name + itemName}>
                        {itemName}- {description}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {peopleMemos.length} connections
            </Accordion.Header>
            <Accordion.Body>
              {peopleMemos.length === 0 && <span>No connection record</span>}
              {peopleMemos.length > 0 && (
                <ListGroup>
                  {peopleMemos.map((item) => {
                    const { name: itemName, organization } = item;
                    return (
                      <ListGroup.Item key={name + item}>
                        {itemName}- {organization}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </>
  );
}
