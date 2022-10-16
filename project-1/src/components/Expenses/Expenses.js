import React, { Fragment, useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  function changeHandler(event) {
    setSelectedYear(event.target.value);
  }

  return (
    <Fragment>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChange={changeHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </Fragment>
  );
}

export default Expenses;
