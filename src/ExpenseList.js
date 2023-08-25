import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  const expenses = props.expenses;

  return (
    <div className={styles["expense-List-container"]}>
      <h2>소비 내역</h2>
      {expenses.length === 0 ? (
        <p>소비 내역을 추가해주세요.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className={styles["expense-item"]}>
              <ExpenseItem expense={expense} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
