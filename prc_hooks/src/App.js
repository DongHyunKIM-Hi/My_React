import React, { useReducer, createContext } from "react";
import "./styles.css";
import Create from "./test1/Create";
import UserList from "./test1/UserList";

export const UserDispatch = createContext(null);

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

  return (
    <UserDispatch.Provider value={dispatch}>
      <Create />
      <UserList users={users} />
    </UserDispatch.Provider>
  );
}
