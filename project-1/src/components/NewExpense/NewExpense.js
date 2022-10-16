import React from "react";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

function NewExpense() {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
}

export default NewExpense;
