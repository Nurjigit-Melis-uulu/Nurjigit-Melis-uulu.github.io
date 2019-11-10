import React from "react";

import classes from "./Nav.module.css";

function Nav(props) {
  return (
    <nav className={classes.Nav}>
      <div className={classes.logo}>
        <a href="#top">
          <img src="" alt="logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Works">Works</a>
        </li>
        <li>
          <a href="#About">About me</a>
        </li>
        <li>
          <a href="#Contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
