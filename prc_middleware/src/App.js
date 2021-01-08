import React from "react";
import { Route } from "react-router-dom";

import PostListPage from "./page/PostListPage";
import PostPage from "./page/PostPage";

function App() {
  return (
    <div>
      <Route path="/" exact component={PostListPage} />
      <Route path="/:id" component={PostPage} />
    </div>
  );
}

export default App;
