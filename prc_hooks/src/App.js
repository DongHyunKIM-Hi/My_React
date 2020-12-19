import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>버튼을 눌러서 값을 바꿔보자</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
