import React, { useState } from "react";

import FormManager from "./FormManager";
import Card from "../UI/Card";
import "./NewExpense.css";

function NewExpense(props) {
  const [formIsVisible, setFormIsVisible] = useState(false);

  function submitHandler(event) {
    const expenseData = {
      ...event,
      id: Math.random().toString(),
    };

    props.onSubmit(expenseData);
    formVisibiltyChangeHandler();
  }

  function formVisibiltyChangeHandler() {
    setFormIsVisible((prevState) => !prevState);
  }

  return (
    <Card className="new-expense">
      <FormManager
        onSubmit={submitHandler}
        onChange={formVisibiltyChangeHandler}
        visible={formIsVisible}
      />
    </Card>
  );
}

export default NewExpense;
