import React from "react";

const ExpenseItem = (props) => {
  const { name, price, type, purchaseDate, memo, wantsToRepurchase } =
    props.expense;

  return (
    <div className="expense-item">
      <h3>{name}</h3>
      <p>Price: {price}원</p>
      <p>Type: {type}</p>
      <p>Purchase Date: {purchaseDate}</p>
      {memo && <p>Memo: {memo}</p>}
      <p>Wants to Repurchase: {wantsToRepurchase ? "Yes" : "No"}</p>
    </div>
  );
};

export default ExpenseItem;
