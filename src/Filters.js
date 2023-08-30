import React, { useState } from "react";
import styles from "./Filters.module.css";

const Filters = (props) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [startDate, setStartDate] = useState(""); // 시작 기간
  const [endDate, setEndDate] = useState(""); // 끝 기간

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    props.onTypeChange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    props.onSortChange(event.target.value);
  };

  // 시작 기간 변경 핸들러
  const handleStartDateChange = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
    props.onStartDateChange(newStartDate); // App 컴포넌트로 시작 기간 전달
  };

  // 끝 기간 변경 핸들러
  const handleEndDateChange = (event) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
    props.onEndDateChange(newEndDate); // App 컴포넌트로 끝 기간 전달
  };
  return (
    <div className={styles["filters-container"]}>
      <label className={styles["filters-label"]}>
        <select
          className={styles["filters-select"]}
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="">전체</option>
          <option value="food">식사</option>
          <option value="cafe">카페</option>
          <option value="life">생활</option>
          <option value="culture">문화/여가</option>
          <option value="cosmetic">의복/미용</option>
          <option value="entertainment">술/유흥</option>
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
