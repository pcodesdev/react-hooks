import { useState } from "react";

export default function useColor(initialBackground, initialText) {
  const [background, setBackground] = useState(initialBackground);
  const [text, setText] = useState(initialText);

  function toggleBackground() {
    if (background === "white") {
      setBackground("black");
      setText("white");
    } else {
      setBackground("white");
      setText("black");
    }
  }

  return [background, text, toggleBackground];
}
