import React, { createContext } from "react";

import { ThemeProvider } from "./components/usecontext/ThemeContext";

import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import UseState from "./components/usestate/UseState";
import UseEffect from "./components/useeffect/UseEffect";
import UseContext from "./components/usecontext/UseContext";
import UseReducer from "./components/usereducer/UseReducer";

export const ColorContext = createContext();

function App() {
  return (
    <div>
      <ThemeProvider>
        <NavBar />
        <Header />
        <UseState />
        <UseEffect />
        <UseContext />
        <UseReducer />
      </ThemeProvider>
    </div>
  );
}

export default App;
