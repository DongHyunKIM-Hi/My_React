import React, { useRef, useReducer } from "react";
import useInput from "./custom/useInput";
import "./styles.css";
import Create from "./test1/Create";
import UserList from "./test1/UserList";

export default function App() {
  const initialState = {
    users: [
      {
        id: 1,
        name: "Viva",
        age: "25",
        act: true,
      },
      {
        id: 2,
        name: "la",
        age: "20",
        act: true,
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const [form, onChange, reset] = useInput({
    name: "",
    age: "",
  });
  const { name, age } = form;
  function reducer(state, action) {
    switch (action.type) {
      case "create":
        return {
          ...state,
          users: state.users.concat(action.input),
        };
      case "delete":
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.id),
        };
      case "toggle":
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.id ? { ...user, act: !user.act } : user
          ),
        };
      default:
        throw new Error("뭐가 틀린겨");
    }
  }
  const nextId = useRef(3);
  const onCreate = () => {
    dispatch({
      type: "create",
      input: {
        id: nextId.current,
        name,
        age,
        act: true,
      },
    });
    reset();
    nextId.current += 1;
  };
  const onRemove = (id) => {
    console.log(id);
    dispatch({
      type: "delete",
      id,
    });
  };
  const onToggle = (id) => {
    dispatch({
      type: "toggle",
      id,
    });
    console.log(state);
  };
  return (
    <>
      <input placeholder="이름" name="name" value={name} onChange={onChange} />
      <input placeholder="나이" name="age" value={age} onChange={onChange} />
      <button onClick={onCreate}>등록하기</button>
      {users.map((user) => (
        <div key={user.id}>
          <span
            onClick={() => onToggle(user.id)}
            style={{ color: user.act ? "black" : "pink" }}
          >
            {user.name} {user.age}
          </span>
          <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
      ))}
    </>
  );
}
