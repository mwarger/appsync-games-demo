import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewGame from "./containers/NewGame";
import Games from "./containers/Games";
import AuthComponent from "./containers/AuthComponent";

export default () => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} />
    <AuthenticatedRoute path="/games/new" exact component={NewGame} />
    <AuthenticatedRoute path="/games/:id" exact component={Games} />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
