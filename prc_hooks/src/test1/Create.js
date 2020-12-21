import React from "react";

function Create({ username, age, inRoll, onChange }) {
  return (
    <div>
      <input
        name="username"
        onChange={onChange}
        value={username}
        placeholder="이름"
      />
      <input name="age" onChange={onChange} value={age} placeholder="나이" />
      <button onClick={inRoll}>등록</button>
    </div>
  );
}

export default React.memo(Create);
