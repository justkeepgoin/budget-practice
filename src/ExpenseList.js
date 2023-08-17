import React, { useState } from "react";

function ExpenseItem({ expense }) {
  const { name, price, type, purchaseDate, memo, willRepurchase } = expense;

  return (
    <div className="expense-item">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Type: {type}</p>
      <p>Purchase Date: {purchaseDate}</p>
      {memo && <p>Memo: {memo}</p>}
      <p>Will Repurchase: {willRepurchase ? "Yes" : "No"}</p>
    </div>
  );
}

function ExpenseList({ expenses }) {
  const [sorting, setSorting] = useState("newest");
  const [filterType, setFilterType] = useState("all");

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sorting === "highestPrice") {
      return b.price - a.price;
    } else if (sorting === "lowestPrice") {
      return a.price - b.price;
    } else if (sorting === "oldest") {
      return new Date(a.purchaseDate) - new Date(b.purchaseDate);
    } else {
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    }
  });

  const filteredExpenses =
    filterType === "all"
      ? sortedExpenses
      : sortedExpenses.filter((expense) => expense.type === filterType);

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <div>
        <label>
          Sort by:
          <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="highestPrice">Highest Price</option>
            <option value="lowestPrice">Lowest Price</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Filter by Type:
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="entertainment">Entertainment</option>
            {/* Add more types here */}
          </select>
        </label>
      </div>
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
