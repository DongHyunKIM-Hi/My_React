import React from "react";
import "./App.css";
import CounterContaioner from "./containers/CounterContaioner";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContaioner />
      <hr></hr>
      <TodosContainer />
    </div>
  );
}

export default App;
