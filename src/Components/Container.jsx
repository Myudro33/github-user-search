import React from "react";

const Container = ({ children}) => {
  return (
    <div className={`md:w-[40rem] xs:w-[90%] xs:h-screen md:h-[90%] flex flex-col items-center p-2`}>
      {children}
    </div>
  );
};

export default Container;
