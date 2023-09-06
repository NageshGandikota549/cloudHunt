import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const params = useParams();
  const id = params.id;

  const location = useLocation();

  // const handleViewClick = (id) => {
  //   location.push("products/" + id);
  // };

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
      <div className="item">
        <Link to={"/customHook"}>customHook</Link>
      </div>
      <div className="item">
        <Link to={"/products/id"}>Products</Link>
      </div>
      <div className="item">
        <Link to={"/userReducer"}>useReducerDemo</Link>
      </div>
      {/* <button onClick={() => handleViewClick(123)}>view more details</button> */}
    </div>
  );
};
