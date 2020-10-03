import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import "./App.css";
import HistorySample from "./HistorySample";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              페이지를 찾지 못했습니다.
              <p>이런 맙소사</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
