import React from "react";

const ExpenseItem = (props) => {
  const { name, price, purchaseDate, memo, wantsToRepurchase } = props.expense;

  return (
    <div className="expense-item">
      <h3>{name}</h3>
      <p>가격 : {price}원</p>
      <p>구입 날짜 : {purchaseDate}</p>
      {memo && <p>메모: {memo}</p>}
      <p>재구매 의사 : {wantsToRepurchase ? "Yes" : "No"}</p>
    </div>
  );
};

export default ExpenseItem;
