import React, { useRef, useReducer } from "react";
import "./styles.css";
import Create from "./test1/Create";
import UserList from "./test1/UserList";

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "change":
        return {
          input: {
            ...state.input,
            [action.name]: action.value,
          },
        };
      case "create":
        return {
          input: {
            ...state.input,
          },
          users: state.users.concat(state.input),
        };
      default:
        throw new Error("뭐가 틀린겨");
    }
  }
  const initialState = {
    input: {
      name: "",
      age: "",
    },
    users: [
      {
        id: 1,
        name: "Viva",
        age: "25",
      },
      {
        id: 2,
        name: "la",
        age: "20",
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, age } = state.input;
  const { users } = state;
  const onChange = (e) => {
    dispatch({
      type: "change",
      name: e.target.name,
      value: e.target.value,
    });
    console.log(state.input);
  };
  const onCreate = () => {
    dispatch({
      type: "create",
    });
  };
  return (
    <>
      <input placeholder="이름" name="name" value={name} onChange={onChange} />
      <input placeholder="나이" name="age" value={age} onChange={onChange} />
      <button onClick={onCreate}>등록하기</button>
    </>
  );
}
