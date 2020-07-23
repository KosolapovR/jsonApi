import React from "react";
import { Route, Switch } from "react-router-dom";
import PostsPage from "./PostsPage";
import EditPostPage from "./EditPostPage";

export default function Layout() {
  return (
    <div>
      <header />
      <Switch>
        <Route path="/posts/edit/:id" exact>
          <EditPostPage />
        </Route>
        <Route path="/posts" exact>
          <PostsPage />
        </Route>
        <Route path="/" exact>
          <PostsPage />
        </Route>
      </Switch>
    </div>
  );
}
