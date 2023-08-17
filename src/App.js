import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const expenses = [
    // 여기에 실제 데이터를 배열로 추가해주세요
    {
      name: "Item 1",
      price: 10,
      type: "food",
      purchaseDate: "2023-08-17",
      memo: "Some memo",
      willRepurchase: true,
    },
    // 다른 항목들도 추가해주세요
  ];

  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
