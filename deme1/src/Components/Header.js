import React, { useEffect, useState } from "react";

function Header() {
  const setDays = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const [date, setDate] = useState({
    year: "",
    month: "",
    day: "",
    days: "",
  });
  const getDate = () => {
    const getday = new Date().getDate();
    const getmonth = new Date().getMonth();
    const getyear = new Date().getFullYear();
    const getdays = new Date().getDay();
    console.log(getdays);
    setDate({
      year: getyear,
      month: getmonth + 1,
      day: getday,
      days: getdays,
    });
  };
  useEffect(getDate, []);
  return (
    <div>
      <span>
        {date.year}년{date.month}월{date.day}일
      </span>
      <span>{setDays[date.days]}</span>
    </div>
  );
}

export default Header;
