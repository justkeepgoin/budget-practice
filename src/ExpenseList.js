import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  const { expenses, startDate, endDate } = props;

  // 시작 기간 끝 기간으로 필터링된 소비 내역 배열을 계산
  const filteredExpenses = expenses
    .filter(
      (expense) =>
        startDate === "" ||
        new Date(expense.purchaseDate) >= new Date(startDate)
    )
    .filter(
      (expense) =>
        endDate === "" || new Date(expense.purchaseDate) <= new Date(endDate)
    );

  return (
    <div className={styles["expense-List-container"]}>
      <h2>소비 내역</h2>

      {filteredExpenses.length === 0 ? (
        <p>소비 내역이 없습니다.</p>
      ) : (
        <ul>
          {filteredExpenses.map((expense, index) => (
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
