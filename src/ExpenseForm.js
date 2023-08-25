import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

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
    <div className={styles["expense-form-container"]}>
      <h2>가계부</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-row"]}>
          <label className={styles["form-label"]}>
            이름
            <input
              className={styles["form-input"]}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles["form-row"]}>
          <label className={styles["form-label"]}>
            가격
            <input
              className={styles["form-input"]}
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles["form-row"]}>
          <label className={styles["form-label"]}>
            유형
            <input
              className={styles["form-input"]}
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles["form-row"]}>
          <label className={styles["form-label"]}>
            구입 날짜
            <input
              className={styles["form-input"]}
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label className={styles["form-label"]}>
            메모
            <input
              className={styles["form-input"]}
              type="checkbox"
              name="hasMemo"
              checked={formData.hasMemo}
              onChange={handleInputChange}
            />
          </label>

          {formData.hasMemo && (
            <label>
              메모 작성
              <input
                className={["form-checkbox-label"]}
                type="text"
                name="memo"
                value={formData.memo}
                onChange={handleInputChange}
              />
            </label>
          )}
        </div>

        <div>
          <label className={styles["form-label"]}>
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
        </div>

        <button className={styles["button"]} type="submit">
          추가
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
