import React from "react";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.Header}>
      <div>
        <p className={classes.homePageTitle}>
          <span>&mdash;&mdash; Welcome! My name is &mdash;&mdash;</span>
          <span>Nurjigit Melis uulu</span>
          <span>&mdash;&mdash; and i am &mdash;&mdash;</span>
          <span>Front-End developer</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
