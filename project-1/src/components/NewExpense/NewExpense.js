import React from "react";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

function NewExpense(props) {
  function submitHandler(event) {
    const expenseData = {
      ...event,
      id: Math.random().toString(),
    };

    props.onSubmit(expenseData);
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onSubmit={submitHandler} />
    </Card>
  );
}

export default NewExpense;
