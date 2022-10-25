import React from "react";
import "../App.css";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

const Navbar = ({ theme, settheme }) => {
  return (
    <div className="w-[38rem] h-9 flex justify-between items-center">
      <h1
        className={`text-2xl font-semibold ${
          theme ? "text-[#222731]" : "text-[#ffffff]"
        }`}
      >
        devfinder
      </h1>
      <span className="flex items-center">
        <h1
          className={`text-xl font-semibold ${
            theme ? "text-[#4b6a9b]" : "text-[#ffffff]"
          }`}
        >
          {theme ? "DARK" : "LIGHT"}
        </h1>
        <img
          onClick={() => settheme((prev) => !prev)}
          className="w-6 h-6 ml-2"
          src={theme ? iconMoon : iconSun}
          alt="icon"
        />
      </span>
    </div>
  );
};

export default Navbar;
