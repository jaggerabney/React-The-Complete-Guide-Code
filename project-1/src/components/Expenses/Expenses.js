import React, { Fragment, useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );
  let expensesContent = <p>No expenses found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  function changeHandler(event) {
    setSelectedYear(event.target.value);
  }

  return (
    <Fragment>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChange={changeHandler} />
        {expensesContent}
      </Card>
    </Fragment>
  );
}

export default Expenses;
