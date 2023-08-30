import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Filters from "./Filters";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "식사",
      price: 15000,
      type: "food",
      purchaseDate: "2023-08-15",
      hasMemo: true,
      memo: "맛있는 점심",
      wantsToRepurchase: true,
    },
    {
      id: 2,
      name: "카페",
      price: 5000,
      type: "cafe",
      purchaseDate: "2023-08-16",
      hasMemo: false,
      memo: "",
      wantsToRepurchase: false,
    },
    {
      id: 3,
      name: "의복/미용",
      price: 30000,
      type: "cosmetic",
      purchaseDate: "2023-08-17",
      hasMemo: true,
      memo: "새로운 옷과 화장품",
      wantsToRepurchase: true,
    },
    {
      id: 4,
      name: "식사",
      price: 12000,
      type: "food",
      purchaseDate: "2023-08-18",
      hasMemo: false,
      memo: "",
      wantsToRepurchase: true,
    },
    {
      id: 5,
      name: "문화/여가",
      price: 25000,
      type: "culture",
      purchaseDate: "2023-08-19",
      hasMemo: true,
      memo: "영화와 공연 관람",
      wantsToRepurchase: false,
    },
    {
      id: 6,
      name: "식사",
      price: 18000,
      type: "food",
      purchaseDate: "2023-08-20",
      hasMemo: false,
      memo: "",
      wantsToRepurchase: true,
    },
    {
      id: 7,
      name: "생활",
      price: 100000,
      type: "life",
      purchaseDate: "2023-08-21",
      hasMemo: true,
      memo: "가전제품 구매",
      wantsToRepurchase: false,
    },
    {
      id: 8,
      name: "카페",
      price: 7000,
      type: "cafe",
      purchaseDate: "2023-08-22",
      hasMemo: false,
      memo: "",
      wantsToRepurchase: true,
    },
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...newExpense, id: prevExpenses.length + 1 },
    ]);
  };

  const [currentTypeFilter, setCurrentTypeFilter] = useState("");
  const [currentSort, setCurrentSort] = useState("");
  const [startDate, setStartDate] = useState(""); // 시작 기간 상태
  const [endDate, setEndDate] = useState(""); // 끝 기간 상태

  // 유형에 따른 필터링 로직 구현
  const filterExpensesByType = (type) => {
    if (type === "") {
      return expenses;
    }
    return expenses.filter((expense) => expense.type === type);
  };

  // 정렬 로직 구현
  const sortExpenses = (expenses, sortType) => {
    if (sortType === "highToLow") {
      return expenses.slice().sort((a, b) => b.price - a.price);
    } else if (sortType === "lowToHigh") {
      return expenses.slice().sort((a, b) => a.price - b.price);
    } else if (sortType === "newest") {
      return expenses
        .slice()
        .sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
    } else if (sortType === "oldest") {
      return expenses
        .slice()
        .sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate));
    }
    return expenses;
  };

  // 필터링 및 정렬된 항목 리스트 계산
  const filteredAndSortedExpenses = sortExpenses(
    filterExpensesByType(currentTypeFilter),
    currentSort
  );

  return (
    <div className="App">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <Filters
        onTypeChange={setCurrentTypeFilter}
        onSortChange={setCurrentSort}
        onStartDateChange={setStartDate} // 시작 기간 변경 핸들러 추가
        onEndDateChange={setEndDate} // 끝 기간 변경 핸들러 추가
      />
      <ExpenseList
        expenses={filteredAndSortedExpenses}
        startDate={startDate} // 시작 기간 전달
        endDate={endDate} // 끝 기간 전달
      />
    </div>
  );
}

export default App;
