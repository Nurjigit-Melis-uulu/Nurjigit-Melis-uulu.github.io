import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";

function Nav(props) {
  return (
    <div className={classes.Nav}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src="" alt="logo" />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Works">Works</NavLink>
        </li>
        <li>
          <NavLink to="/About">About me</NavLink>
        </li>
        <li>
          <NavLink to="/Contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
