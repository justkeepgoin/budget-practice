import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const expenses = props.expenses;

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses to display.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <ExpenseItem expense={expense} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
