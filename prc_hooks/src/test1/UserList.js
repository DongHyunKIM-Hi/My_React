import React from "react";

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <b style={{ color: user.act ? "green" : "gray" }}>
            <span onClick={() => onToggle(user.id)}>{user.name}</span>
            <span>({user.age})</span>
          </b>
          <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default React.memo(UserList);
