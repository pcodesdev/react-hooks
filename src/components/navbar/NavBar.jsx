import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Main from "../usecontext/Main";
import "./NavBar.css";

import { ThemeContext } from "../usecontext/ThemeContext";

import Logo from "./../../Assets/logo.png";

function NavBar() {
  const { theme } = useContext(ThemeContext);
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          className="p-3 rounded"
          href="#home"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
        >
          <img
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top fs-4"
            alt="React Bootstrap logo"
          />
          {""}
          React Hooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link className="fs-5 " href="#usestate">
              useState
            </Nav.Link>
            <Nav.Link className="fs-5 " href="#useeffect">
              useEffect
            </Nav.Link>
            <Nav.Link className="fs-5 " href="#usecontext">
              useContext
            </Nav.Link>
            <Nav.Link className="fs-5 " href="#usereducer">
              useReducer
            </Nav.Link>
            <Nav.Link className="fs-5 " href="#usecallback">
              useCallBack
            </Nav.Link>
            <Nav.Link className="fs-5 " href="#usememo">
              useMeme
            </Nav.Link>
            <Main />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
