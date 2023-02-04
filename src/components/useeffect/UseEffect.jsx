import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { ThemeContext } from "../usecontext/ThemeContext";

const API_URL = "https://api.imgflip.com/get_memes";

function UseEffect() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function fetchMemes() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMemes(data.data.memes);
    }
    fetchMemes();
  }, []);

  function handleClick() {
    setSelectedMeme(memes[Math.floor(Math.random() * memes.length)].url);
  }
  return (
    <CardGroup
      id="useeffect"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <Card
        className="m-3 shadow"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
        }}
      >
        <Card.Body>
          <Card.Title className="fs-3 text-center text-decoration-underline">
            useEffect
          </Card.Title>
          <Card.Text
            className="fs-4 fst-italic "
            style={{ textAlign: "justify" }}
          >
            The useEffect hook in React can be thought of as a chef cooking a
            dish. The hook is called to perform a specific side effect, just as
            the chef is called to cook a specific dish. The hook can be cleaned
            up after the side effect, just like the chef cleans up after
            cooking. The hook takes a callback function and an array of
            dependencies, similar to a chef using ingredients. The hook re-runs
            the effect when dependencies change or when the component
            re-renders, just as the chef may re-cook a dish if ingredients
            change or the order is re-placed. In short, the useEffect hook helps
            you perform side effects in a controlled way.{" "}
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
        {selectedMeme ? (
          <Card.Img src={selectedMeme} alt="Random Dev Meme" />
        ) : (
          "Loading..."
        )}
        <Card.Body className="text-center">
          <Button
            className="fs-3 text-center text-decoration-underline m-5"
            variant="primary"
            onClick={handleClick}
          >
            Generate Random Meme
          </Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default UseEffect;
