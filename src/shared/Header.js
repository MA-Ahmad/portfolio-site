import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#company">Company</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/home" className="nav-link">
            <span className="fa fa-home fa-lg"></span>Home
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            <span className="fa fa-picture-o fa-lg"></span>Gallery
          </NavLink>
          <NavLink to="/users" className="nav-link">
            <span className="fa fa-user fa-lg"></span>Users
          </NavLink>
          <NavLink to="/pricing" className="nav-link">
            <span className="fa fa-money fa-lg"></span>Pricing
          </NavLink>
          <Nav.Link className="nav-link" href="#contactus">
            <span className="fa fa-address-card fa-lg"></span> Contact Us
          </Nav.Link>
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
