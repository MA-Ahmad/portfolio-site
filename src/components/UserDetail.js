import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/user-context";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const UserDetail = ({ match }) => {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");

  const context = useContext(UserContext);
  const selectedUser = context.users.filter(
    user => user.id === parseInt(match.params.id, 10)
  )[0];

  const required = val => val && val.length;
  const maxLength = len => val => !val || val.length <= len;
  const minLength = len => val => val && val.length >= len;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = values => {
    setShow(false);
    const user = { id: selectedUser.id, image: "", ...values };
    console.log(user);
    context.addUser(user);
  };

  const handleNameChange = e => {
    setUserName(e.target.value);
  };

  const handleDescriptionChange = e => {
    setUserDescription(e.target.value);
  };

  useEffect(() => {
    // if (userName === "") {
    //   setUserName(selectedUser.name);
    // } else {
    //   setUserName("");
    // }
    setUserName(selectedUser.name);
    // required(selectedUser.name);

    console.log("Useeffect");
  }, []);

  useEffect(() => {
    if (userDescription === "") {
      setUserDescription(selectedUser.description);
    } else {
      setUserDescription("");
    }
    console.log("Useeffect");
  }, []);

  //   const findUser = id => {
  //     const user = users.find(user => user.id === id);

  //     // setEditUser(user);
  //   };

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
            <Card.Title>{userName}</Card.Title>
            <Card.Text>{selectedUser.description}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              <span className="fa fa-pencil fa-lg"></span> Edit
            </Button>
          </Card.Body>
        </Card>
        <Col xs={6} md={4}></Col>
      </Row>

      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
          <LocalForm onSubmit={values => handleSubmit(values)}>
            <Modal.Header closeButton>Submit Comment</Modal.Header>
            <Modal.Body>
              <Row className="form-group">
                <label className="form-label" htmlFor="rating" md={2}>
                  Rating
                </label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    className="form-control"
                    type="select"
                    name="rating"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <label className="form-label" htmlFor="username" md={4}>
                  Your Name
                </label>
                <Col md={12}>
                  <Control.text
                    model=".username"
                    id="username"
                    name="username"
                    value={userName}
                    onChange={handleNameChange}
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <label className="form-label" htmlFor="description" md={4}>
                  Description
                </label>
                <Col md={12}>
                  <Control.textarea
                    model=".description"
                    className="form-control"
                    type="textarea"
                    id="description"
                    name="description"
                    value={userDescription}
                    onChange={handleDescriptionChange}
                    rows="6"
                  />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="flex-lg-row-reverse">
              <Button type="submit" color="primary">
                Submit
              </Button>{" "}
            </Modal.Footer>
          </LocalForm>
        </Modal>
      </div>
    </Container>
  );
};

export default UserDetail;
