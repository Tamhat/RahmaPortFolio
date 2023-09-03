// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavLink to="/" className="navbar-item">
          <button className="navbar-link  active" data-nav-link>
            About
          </button>
        </NavLink>
        <NavLink to="https://rahma-dev.vercel.app/resume" className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Resume
          </button>
        </NavLink>
        <NavLink to="https://rahma-dev.vercel.app/portfolio" className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Portfolio
          </button>
        </NavLink>
        <NavLink to="https://rahma-dev.vercel.app/blog" className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Blog
          </button>
        </NavLink>
        <NavLink to="https://rahma-dev.vercel.app/contact" className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Contact
          </button>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
