import React from "react";

export const ThemeTextContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});
