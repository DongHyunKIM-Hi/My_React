import React, { useReducer, createContext } from "react";
import "./styles.css";
import Create from "./test1/Create";
import UserList from "./test1/UserList";
import produce from "immer";
import styled from "styled-components";
import Button from "./styled/Button";
export const UserDispatch = createContext(null);
window.produce = produce;
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
  const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
  `;
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
    <>
      <UserDispatch.Provider value={dispatch}>
        <Create />
        <UserList users={users} />
      </UserDispatch.Provider>
      <AppBlock>
        <Button>sad</Button>
      </AppBlock>
    </>
  );
}
