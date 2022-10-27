import React, { useState } from "react";
import "../App.css";
import useKey from "@rooks/use-key";
import iconSearch from "../assets/icon-search.svg";

const Input = ({ theme,setuser }) => {
  const [value, setValue] = useState("");
  const getData = () => {
    setuser(value)
    setValue('')
  };
  useKey(["Enter"], getData);
  return (
    <div
      className={`${
        theme ? "info-lightColor" : "info-darkColor"
      } rounded-xl  w-full h-16 flex justify-between items-center shadow-md p-3 mt-5`}
    >
      <span className="flex items-center">
        <img src={iconSearch} alt="icon" />
        <input
          className={`bg-transparent md:placeholder:text-base xs:placeholder:text-xs md:w-52 xs:w-40 ${
            theme ? "text-black" : "text-white"
          } outline-none ml-3`}
          type="text"
          placeholder="Search github user..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </span>
      <button
        onClick={getData}
        className="bg-[#0079ff] text-white w-20 h-12 box-border rounded-xl"
      >
        Search
      </button>
    </div>
  );
};

export default Input;
