import React, { useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import Info from "./Components/Info";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";

const App = () => {
  const [theme, settheme] = useState(true);
 const [user, setuser] = useState('myudro33')
  return (
    <div
      className={`w-full h-screen flex justify-center items-center ${
        theme ? "light-color" : "dark-color"
      }`}
    >
      <Container>
        <Navbar theme={theme} settheme={settheme} />
        <Input setuser={setuser} theme={theme} />
        <Info user={user} />
      </Container>
    </div>
  );
};

export default App;
