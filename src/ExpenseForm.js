import React, { useState } from "react";

function ExpenseForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [showMemo, setShowMemo] = useState(false);
  const [memo, setMemo] = useState("");
  const [willRepurchase, setWillRepurchase] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    const newValue = type === "checkbox" ? e.target.checked : value;

    // 객체를 사용하여 각 상태 업데이트 처리
    const stateUpdater = {
      name: setName,
      price: setPrice,
      type: setType,
      purchaseDate: setPurchaseDate,
      showMemo: setShowMemo,
      memo: setMemo,
      willRepurchase: setWillRepurchase,
    };

    if (stateUpdater[name]) {
      stateUpdater[name](newValue);
    }
  };

  return (
    <div>
      <h2>Expense Form</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Type:
        <input
          type="text"
          name="type"
          value={type}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Purchase Date:
        <input
          type="date"
          name="purchaseDate"
          value={purchaseDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Memo:
        <input
          type="checkbox"
          name="showMemo"
          checked={showMemo}
          onChange={handleInputChange}
        />
        {showMemo && (
          <input
            type="text"
            name="memo"
            value={memo}
            onChange={handleInputChange}
          />
        )}
      </label>
      <br />
      <label>
        Will Repurchase:
        <input
          type="checkbox"
          name="willRepurchase"
          checked={willRepurchase}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

export default ExpenseForm;
