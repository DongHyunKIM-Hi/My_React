import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "case1":
      return state + 1;
    case "case2":
      return state - 1;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      {state}
      <button onClick={() => dispatch({ type: "case1" })}>+</button>
      <button onClick={() => dispatch({ type: "case2" })}>-</button>
    </>
  );
}

export default Counter;
