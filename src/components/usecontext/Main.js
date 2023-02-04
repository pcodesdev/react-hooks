import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Main = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
    >
      <button
        className="btn btn-secondary rounded p-1 text-white"
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
};

export default Main;
