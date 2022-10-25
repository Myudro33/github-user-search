import React from "react";

const Container = ({ children}) => {
  return (
    <div className={`w-[40rem] h-[90%] flex flex-col items-center p-2`}>
      {children}
    </div>
  );
};

export default Container;
