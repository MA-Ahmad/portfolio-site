import React, { useState, useContext, useEffect } from "react";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import UserContext from "../context/user-context";

const UserFormModal = props => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");

  const required = val => val && val.length;
  const maxLength = len => val => !val || val.length <= len;
  const minLength = len => val => val && val.length >= len;

  const handleClose = () => props.setShow(false);

  const context = useContext(UserContext);

  const handleSubmit = values => {
    props.setShow(false);
    const user = { id: props.selectedUser.id, image: "", ...values };
    console.log("uu", user);
    props.setUser({ ...user, name: user.name });
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
    setUserName(props.selectedUser.name);
  }, []);

  useEffect(() => {
    if (userDescription === "") {
      setUserDescription(props.selectedUser.description);
    } else {
      setUserDescription("");
    }
  }, []);

  return (
    <Modal
      show={props.show}
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
            <label className="form-label" htmlFor="name" md={4}>
              Your Name
            </label>
            <Col md={12}>
              <Control.text
                model=".name"
                id="name"
                name="name"
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
                model=".name"
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
  );
};

export default UserFormModal;
