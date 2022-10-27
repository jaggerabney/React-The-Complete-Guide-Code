import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../resources/meals.jpg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </Fragment>
  );
}

export default Header;
