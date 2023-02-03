import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

import Logo from './../../Assets/logo.png';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top fs-4"
            alt="React Bootstrap logo"
          />{''}
          React Hooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto justify__content" >
            <Nav.Link className="fs-4" href="#usestate">useState</Nav.Link>
            <Nav.Link className="fs-4" href="#useeffect">useEffect</Nav.Link>
            <Nav.Link className="fs-4" href="#usecontext">useContext</Nav.Link>

            <Nav.Link className="fs-4" href="#usereducer">useReducer</Nav.Link>
            <Nav.Link className="fs-4" href="#usecallback">useCallBack</Nav.Link>
            <Nav.Link className="fs-4" href="#usememe">useMeme</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
