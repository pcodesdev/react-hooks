import React, { useContext } from "react";
import { ThemeTextContext } from "./ThemeTextContext";

function TextFontThemExample() {
  const { theme1 } = useContext(ThemeTextContext);

  return (
    <div
      className="p-5 rounded-pill"
      style={{
        backgroundColor: theme1 === "light" ? "white" : "black",
        color: theme1 === "light" ? "black" : "white",
      }}
    >
      This is some text in {theme1} theme.
    </div>
  );
}

export default TextFontThemExample;
