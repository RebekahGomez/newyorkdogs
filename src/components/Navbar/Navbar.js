import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dogs of New York</h1>
      <div className="links">
        Welcome! This is a <b>Work In Paw-gress!</b> <br />
        It's probably loading slowly, so just give it a bit. <br />
        Enjoy all these good dogs spotted in NYC as I gradually build out this
        site. <br />I appreciate your patience as I learn new techniques to make
        this a better, more interactive site!
      </div>
    </nav>
  );
};

export default Navbar;
