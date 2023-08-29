import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import useRefDemo from './../useRefDemo/useRefDemo';

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
      <div className="item">
        <Link to={"/parent"}>Parent</Link>
      </div>
      <div className="item">
        <Link to={"/parentUseCallback"}>Usecallback Parent</Link>
      </div>
      <div className="item">
        <Link to={"/useMemoDemo"}>useMemo</Link>
      </div>
      <div className="item">
        <Link to={"/useRefDemo"}>useRefDemo</Link>
      </div>
    </div>
  );
};
