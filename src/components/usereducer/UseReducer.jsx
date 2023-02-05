import React, { useReducer, useContext } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { ThemeContext } from "../usecontext/ThemeContext";

const initialState = {
  backgroundColor: "white",
  textColor: "black",
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return {
        backgroundColor: state.backgroundColor === "white" ? "black" : "white",
        textColor: state.textColor === "black" ? "white" : "black",
      };
    default:
      return state;
  }
}

function UseReducer() {
  const { theme } = useContext(ThemeContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardGroup
      id="usereducer"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <Card
        className="m-3"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
        }}
      >
        <Card.Body>
          <Card.Title className="fs-3 text-center text-decoration-underline">
            useReducer
          </Card.Title>
          <Card.Text
            className="fs-4 fst-italic "
            style={{ textAlign: "justify" }}
          >
            The useReducer hook in React is a hook that allows you to manage
            state in your application. It's similar to the useState hook, but
            with some additional features. The useReducer hook takes two
            arguments: the first is the initial state, and the second is a
            function that returns the new state based on the current state and
            an action. The function is commonly referred to as the "reducer"
            function. With the useReducer hook, you can manage complex state
            updates that depend on the current state and an action. This can
            help you write cleaner and more readable code, as you can
            encapsulate all the logic for updating state in a single function.
            The difference between useReducer and useState is that useState is a
            simpler hook for managing state, and is suitable for most simple
            state updates. useReducer, on the other hand, is better suited for
            more complex state updates that depend on the current state and an
            action.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        className="m-3"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
        }}
      >
        <Card.Title className="fs-3 text-center text-decoration-underline">
          Example
        </Card.Title>
        <Card.Body
          className="text-center"
          style={{ backgroundColor: state.theme, padding: "10px" }}
        >
          <Card.Text className="fs-3 text-center m-5 text-success-emphasis">
            {/* {state.text} */}
          </Card.Text>

          <div
            className="m-4 rounded-pill"
            style={{
              backgroundColor: state.backgroundColor,
              color: state.textColor,
            }}
          >
            <p>Hello, World!</p>
            <button
              className="btn btn-secondary rounded-pill"
              onClick={() => dispatch({ type: "toggle" })}
            >
              Toggle Colors
            </button>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default UseReducer;
