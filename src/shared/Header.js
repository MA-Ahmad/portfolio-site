import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#company">Company</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home" className="active">
            <span className="fa fa-home fa-lg"></span>Home
          </Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </header>
  );
};

export default Header;
