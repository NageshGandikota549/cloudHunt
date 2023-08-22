import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
//presentational/stateless/dummy components
export const Navbar = () => {
  return (
    <div className="navbar-conatiner">
      <div className="item">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="item">
        <Link to={"/login"}>Login</Link>
      </div>
      <div className="item">
        <Link to={"/register"}>Register</Link>
      </div>
      <div className="item">
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};
