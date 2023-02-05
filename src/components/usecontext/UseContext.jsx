import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import TextFontThemeExample from "./themetextchange/TextFontThemeExample";
import { ThemeTextContext } from "./themetextchange/ThemeTextContext";

import { ThemeContext } from "../usecontext/ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);
  const [theme1, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme1 === "light" ? "dark" : "light");
  };

  return (
    <CardGroup
      id="usecontext"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <Card className="m-3">
        <Card.Body>
          <Card.Title className="fs-3 text-center text-decoration-underline text-black">
            useContext
          </Card.Title>
          <Card.Text
            className="fs-4 fst-italic"
            style={{
              textAlign: "justify",
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
            }}
          >
            React useContext is a hook that allows a component to access data
            from a context, without having to pass the data down as props
            through multiple levels of the component tree. Imagine a scenario
            where you have a global theme for your application and you want to
            change the theme dynamically based on the user's preference. The
            theme includes the font, background color, and text color. In this
            scenario, you could create a context that holds the current theme.
            In the root component, you would wrap your application with the
            ThemeContext.Provider, providing the current theme as the value. Any
            component in your application can then use the useContext hook to
            access the theme data and update it dynamically based on the user's
            actions.{" "}
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
        <Card.Body className="text-center">
          <Card.Title className="fs-3 text-center text-decoration-underline">
            Example
          </Card.Title>
          <Card.Text>
            <ThemeTextContext.Provider value={{ theme1, toggleTheme }}>
              <Button
                className="fs-3 text-center text-decoration-underline m-5 rounded-pill"
                variant="primary"
                onClick={toggleTheme}
              >
                Toggle
              </Button>
              <TextFontThemeExample />
            </ThemeTextContext.Provider>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Header;
