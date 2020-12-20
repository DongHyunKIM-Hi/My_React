import React, { useEffect, useRef, useState } from "react";
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
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onCreate = () => {
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
  };
  const onRemove = (id) => {
    setUserList(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUserList(
      users.map((user) => (user.id === id ? { ...user, act: !user.act } : user))
    );
  };
  return (
    <>
      <Create nick={name} age={age} onCreate={onCreate} onChange={onChange} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
