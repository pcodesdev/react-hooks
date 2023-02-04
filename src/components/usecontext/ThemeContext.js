import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    textColor: "black",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor:
        prevTheme.backgroundColor === "white" ? "black" : "white",
      textColor: prevTheme.textColor === "black" ? "white" : "black",
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
