import React from "react";
import ExpenseForm from "./ExpenseForm";

function FormManager(props) {
  if (!props.visible) {
    return <button onClick={props.onChange}>Add New Expense</button>;
  }

  return <ExpenseForm onSubmit={props.onSubmit} onChange={props.onChange} />;
}

export default FormManager;
