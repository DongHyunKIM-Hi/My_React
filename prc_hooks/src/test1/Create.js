import React, { useContext, useRef } from "react";
import { UserDispatch } from "../App";
import useInput from "../custom/useInput";

function Create() {
  const dispatch = useContext(UserDispatch);
  const [form, onChange, reset] = useInput({
    name: "",
    age: "",
  });
  const nextId = useRef(3);
  const onClick = () => {
    dispatch({
      type: "create",
      input: {
        id: nextId.current,
        name: name,
        age: age,
        act: true,
      },
    });
    reset();
    nextId.current += 1;
  };
  const { name, age } = form;
  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="age" value={age} onChange={onChange} />
      <button onClick={onClick}>등록</button>
    </div>
  );
}

export default React.memo(Create);
