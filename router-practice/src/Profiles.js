import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/velopter">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/viva">viva</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주시요</div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample></WithRouterSample>
      <RouterHookSample></RouterHookSample>
    </div>
  );
}

export default Profiles;
