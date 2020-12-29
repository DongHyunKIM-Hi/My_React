import React, { useEffect, useState } from "react";

function Header() {
  const [date, setDate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const getDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    return day;
  };
  useEffect(getDate, []);
  return <div>{day}</div>;
}

export default Header;
