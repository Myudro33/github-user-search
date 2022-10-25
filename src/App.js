import React, { useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";

const App = () => {
  const [theme, settheme] = useState(true);

  return (
    <div
      className={`w-full h-screen flex justify-center items-center ${
        theme ? "light-color" : "dark-color"
      }`}
    >
      <Container>
        <Navbar theme={theme} settheme={settheme} />
      </Container>
    </div>
  );
};

export default App;
