import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark purple-header shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          SM Tax Services Inc.
        </NavLink>
        <div className="navbar-nav ms-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink to="/faq" className="nav-link">FAQ</NavLink>
          <NavLink className="nav-link" to="/services">Services</NavLink>
          <NavLink className="nav-link" to="/resources">Resources</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
