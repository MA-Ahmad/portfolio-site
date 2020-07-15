import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Gallery = () => {
  return (
    <Container className="gallery-container">
      <Row>
        <Col xs={6} md={4}>
          <Image src="/assets/images/slider/image3.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/assets/images/slider/image3.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="/assets/images/slider/image3.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
