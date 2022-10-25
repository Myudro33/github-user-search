import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Info = ({ user }) => {
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((Response) => console.log(Response));
  }, [user]);
  return <div>Info</div>;
};

export default Info;
