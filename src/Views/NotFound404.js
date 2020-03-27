import React from "react";
import { NavLink } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <h1>Seems like You are lost</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default NotFound404;
