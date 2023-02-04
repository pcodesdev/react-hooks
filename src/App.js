import React, { createContext } from "react";

import { ThemeProvider } from "./components/usecontext/ThemeContext";

import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import UseState from "./components/usestate/UseState";
import UseEffect from "./components/useeffect/UseEffect";

export const ColorContext = createContext();

function App() {
  return (
    <div>
      <ThemeProvider>
        <NavBar />
        <Header />
        <UseState />
        <UseEffect />
      </ThemeProvider>
    </div>
  );
}

export default App;
