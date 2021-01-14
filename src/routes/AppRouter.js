import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "../components/Header";
import { PostCreate } from "../components/PostCreate";
import { Index } from "../components/views/Index";
import { Post } from "../components/views/Post";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/create" component={PostCreate} />

          <Route exact path="/posts/:postId" component={Post} />

          <Route exact path="/" component={Index} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};
