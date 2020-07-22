import React, { useState, useContext, useEffect } from "react";
import UserFormModal from "../shared/UserFormModal";
import UserContext from "../context/user-context";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const UserDetail = ({ match }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ name: "", description: "" });
  const handleShow = () => setShow(true);

  const context = useContext(UserContext);
  const selectedUser = context.users.filter(
    user => user.id === parseInt(match.params.id, 10)
  )[0];

  useEffect(() => {
    setUser({ name: selectedUser.name, description: selectedUser.description });
    console.log("Usee ffect", selectedUser);
  }, []);

  return (
    <Container className="gallery-container">
      <Row className="gallery-row">
        <Col xs={6} md={4}></Col>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="/assets/images/slider/image3.jpg"
            style={{ width: "100%", height: "12rem" }}
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.description}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              <span className="fa fa-pencil fa-lg"></span> Edit
            </Button>
          </Card.Body>
        </Card>
        <Col xs={6} md={4}></Col>
      </Row>

      <UserFormModal
        show={show}
        setShow={setShow}
        user={user}
        setUser={setUser}
        selectedUser={selectedUser}
      />
    </Container>
  );
};

export default UserDetail;
