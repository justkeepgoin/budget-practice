import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    purchaseDate: "",
    hasMemo: false,
    memo: "",
    wantsToRepurchase: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddExpense(formData);
    setFormData({
      name: "",
      price: "",
      type: "",
      purchaseDate: "",
      hasMemo: false,
      memo: "",
      wantsToRepurchase: false,
    });
  };

  return (
    <div>
      <h2>가계부</h2>
      <form onSubmit={handleSubmit}>
        <label>
          이름
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          가격
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          유형
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          구입 날짜
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          메모
          <input
            type="checkbox"
            name="hasMemo"
            checked={formData.hasMemo}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {formData.hasMemo && (
          <label>
            메모 작성
            <input
              type="text"
              name="memo"
              value={formData.memo}
              onChange={handleInputChange}
            />
          </label>
        )}
        <br />

        <label>
          재구매 의사
          <label>
            <input
              type="radio"
              name="wantsToRepurchase"
              value="true"
              checked={formData.wantsToRepurchase}
              onChange={handleInputChange}
            />
            한다
          </label>
          <label>
            <input
              type="radio"
              name="wantsToRepurchase"
              value="false"
              checked={!formData.wantsToRepurchase}
              onChange={handleInputChange}
            />
            안한다
          </label>
        </label>
        <br />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
