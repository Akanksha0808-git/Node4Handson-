import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-items">
        < NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}   to="/">
          Home
        </ NavLink>
        <div className="user-signup">
          < NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}  to="/login">
            Login
          </ NavLink>
          < NavLink className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')} to="/register">
            Register
          </ NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;