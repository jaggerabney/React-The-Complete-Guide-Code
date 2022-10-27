import React, { Fragment } from "react";

import mealsImage from "../../resources/meals.jpg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Dummy button</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </Fragment>
  );
}

export default Header;
