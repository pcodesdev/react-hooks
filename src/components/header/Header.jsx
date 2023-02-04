import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { ThemeContext } from "../usecontext/ThemeContext";
import "./Header.css";

import Logo from "./../../Assets/logo.png";

function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <CardGroup
      id="home"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <Card
        className="m-3"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
        }}
      >
        <Card.Img variant="top" src={Logo} />
      </Card>
      <Card className="m-3">
        <Card.Body>
          <Card.Title className="fs-3 text-center text-decoration-underline text-black">
            React Hooks
          </Card.Title>
          <Card.Text
            className="fs-4 fst-italic"
            style={{
              textAlign: "justify",
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
            }}
          >
            React Hooks are functions that let you add React state and other
            React features to functional components. Hooks let you reuse
            stateful logic between different components and make it easier to
            manage updates to your components. React provides a number of
            built-in hooks, including useState, useEffect, useContext,
            useReducer, useCallback, useMemo, and others. With hooks, you can
            write reusable, composable, and stateful logic that can be shared
            between multiple components. This can help simplify your code, make
            it easier to understand and maintain, and improve performance by
            reducing the amount of code that needs to be re-rendered.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Header;
