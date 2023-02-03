import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">React Hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify__content">
            <Nav.Link href="#usestate">useState</Nav.Link>
            <Nav.Link href="#useeffect">useEffect</Nav.Link>
            <Nav.Link href="#usecontext">useContext</Nav.Link>

            <Nav.Link href="#usereducer">useReducer</Nav.Link>
            <Nav.Link href="#usecallback">useCallBack</Nav.Link>
            <Nav.Link href="#usememe">useMeme</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
