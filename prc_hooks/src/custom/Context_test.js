import React, { createContext, useContext, useState } from "react";

const test = createContext("디폴트 값");

function Count() {
  const final_val = useContext(test);
  return <div>결과값은 : {final_val}</div>;
}

function Context_test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <test.Provider value={count}>
        <Count />
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </test.Provider>
    </div>
  );
}

export default Context_test;
