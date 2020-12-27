import React, { useContext } from "react";
import { UserDispatch } from "../App";

function UserList({ users }) {
  const dispatch = useContext(UserDispatch);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} {user.age}{" "}
          <button
            onClick={() =>
              dispatch({
                type: "delete",
                id: user.id,
              })
            }
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default React.memo(UserList);
