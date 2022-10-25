import React from "react";

const Container = ({ children}) => {
  return (
    <div className={`w-[40rem] h-[90%] flex flex-col items-center`}>
      {children}
    </div>
  );
};

export default Container;
