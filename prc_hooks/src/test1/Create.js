import React from "react";

function Create({ nick, age, onCreate, onChange }) {
  return (
    <div>
      <input name="name" onChange={onChange} value={nick} placeholder="이름" />
      <input name="age" onChange={onChange} value={age} placeholder="나이" />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default Create;
