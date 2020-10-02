import React from "react";

const profileData = {
  velopert: {
    name: "김동현",
    description: "네이버 신입사원",
  },
  viva: {
    name: "Viva",
    description: "update everyday",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
