import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.Header}>
      <div>
        <p className={classes.homePageTitle}>
          <span>&mdash;&mdash; Welcome! My name is &mdash;&mdash;</span>
          <span>Nurjigit Melis uulu</span>
          <span>&mdash;&mdash; and i am &mdash;&mdash;</span>
          <span>Front-End developer</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
