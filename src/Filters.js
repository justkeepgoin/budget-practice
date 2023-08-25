import React, { useState } from "react";
import styles from "./Filters.module.css";

const Filters = (props) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [startDate, setStartDate] = useState(""); // 시작 날짜 상태
  const [endDate, setEndDate] = useState(""); // 종료 날짜 상태

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    props.onTypeChange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    props.onSortChange(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    props.onStartDateChange(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    props.onEndDateChange(event.target.value);
  };

  return (
    <div className={styles["filters-container"]}>
      <label className={styles["filters-label"]}>
        <select
          className={styles["filters-select"]}
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="">유형필터</option>
          <option value="food">음식</option>
          <option value="clothing">의류</option>
          <option value="electronics">전자제품</option>
          {/* ... */}
        </select>
      </label>
      <label>
        <select
          className={styles["filters-select"]}
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="">정렬기준</option>
          <option value="highToLow">가격 높은 순</option>
          <option value="lowToHigh">가격 낮은 순</option>
          <option value="newest">최신 순</option>
          <option value="oldest">오래된 순</option>
        </select>
      </label>
      <label className={styles["filters-label"]}>
        시작 기간
        <input
          className={styles["filters-input"]}
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </label>
      <label className={styles["filters-label"]}>
        끝 기간
        <input
          className={styles["filters-input"]}
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </label>
    </div>
  );
};

export default Filters;
