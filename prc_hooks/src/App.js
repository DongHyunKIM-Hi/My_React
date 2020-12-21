import React, { useRef, useReducer } from "react";
import "./styles.css";
import Create from "./test1/Create";
import UserList from "./test1/UserList";

export default function App() {
  const nextId = useRef(4);
  const initialState = {
    user: {
      username: "",
      age: "",
    },
    users: [
      {
        id: 1,
        username: "Viva",
        age: "24",
        active: true,
      },
      {
        id: 2,
        username: "Vida",
        age: "24",
        active: true,
      },
      {
        id: 3,
        username: "shu",
        age: "24",
        active: true,
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, age } = state.user;
  const { users } = state;
  function reducer(state, action) {
    switch (action.type) {
      case "change":
        return {
          ...state,
          user: {
            ...state.user,
            [action.name]: action.value,
          },
        };
      case "inroll":
        return {
          user: {
            username: "",
            age: "",
          },
          users: state.users.concat(action.user),
        };
      case "remove":
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.id),
        };
      case "toggle":
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.id ? { ...user, active: !user.active } : user
          ),
        };
      default:
        throw new Error("시발 뭐가 틀린겨");
    }
  }

  const onChagne = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "change",
      name,
      value,
    });
  };
  const inRoll = () => {
    dispatch({
      type: "inroll",
      user: {
        id: nextId.current,
        username,
        age,
      },
    });
    nextId.current += 1;
  };
  const reMove = (id) => {
    dispatch({
      type: "remove",
      id,
    });
  };

  const onToggle = (id) => {
    dispatch({
      type: "toggle",
      id,
    });
  };
  const countNum = (users) => {
    return users.filter((user) => user.active === true).length;
  };
  const num = countNum(users);
  return (
    <>
      <Create
        username={username}
        age={age}
        onChange={onChagne}
        inRoll={inRoll}
      />
      <UserList users={users} reMove={reMove} onToggle={onToggle} />
      {num}
    </>
  );
}
