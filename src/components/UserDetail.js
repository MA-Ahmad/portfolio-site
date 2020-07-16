import React from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";

const UserDetail = props => {
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
            <Card.Title>{props.location.query.name}</Card.Title>
            <Card.Text>{props.location.query.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Col xs={6} md={4}></Col>
      </Row>
    </Container>
  );
};

export default UserDetail;
