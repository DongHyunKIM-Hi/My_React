import React from "react";

function UserList({ users, reMove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <b style={{ color: user.active ? "green" : "gray" }}>
            <span onClick={() => onToggle(user.id)}>{user.username}</span>
            <span>({user.age})</span>
          </b>
          <button onClick={() => reMove(user.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default React.memo(UserList);
