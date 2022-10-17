import React, { Fragment, useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  function changeHandler(event) {
    setSelectedYear(event.target.value);
  }

  return (
    <Fragment>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChange={changeHandler} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </Fragment>
  );
}

export default Expenses;
