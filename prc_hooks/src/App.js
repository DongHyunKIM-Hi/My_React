import React, { useCallback, useMemo, useRef, useState } from "react";
import "./styles.css";
import Create from "./test1/Create";
import UserList from "./test1/UserList";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const { name, age } = user;
  const [users, setUserList] = useState([
    {
      id: 1,
      name: "Viva",
      age: 25,
      act: true,
    },
    {
      id: 2,
      name: "la",
      age: 26,
      act: true,
    },
    {
      id: 3,
      name: "gwel",
      age: 22,
      act: true,
    },
  ]);

  const nextId = useRef(4);
  const onChange = useCallback(
    (e) => {
      console.log("dhkdndnasf");
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    },
    [user]
  );
  const onCreate = useCallback(() => {
    const input_user = {
      id: nextId.current,
      name,
      age,
      act: true,
    };
    setUserList(users.concat(input_user));
    setUser({
      ...user,
      name: "",
      age: "",
    });
    nextId.current += 1;
  }, [name, age, users, user]);
  const onRemove = useCallback(
    (id) => {
      setUserList(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUserList(
        users.map((user) =>
          user.id === id ? { ...user, act: !user.act } : user
        )
      );
    },
    [users]
  );

  const countingAct = (users) => {
    console.log("세는중");
    return users.filter((user) => user.act !== true).length;
  };
  const num = useMemo(() => countingAct(users), [users]);
  return (
    <>
      <Create nick={name} age={age} onCreate={onCreate} onChange={onChange} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <span>{num}</span>
    </>
  );
}
