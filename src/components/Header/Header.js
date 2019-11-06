import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.Header}>
      <div>
        <p>
          <span>Welcome! My name is</span>
          <span>Nurjigit Melis uulu</span>
          <span>and i am</span>
          <span>Front-End developer</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
