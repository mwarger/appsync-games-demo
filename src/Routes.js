import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import NewGame from "./containers/NewGame";
import Games from "./containers/Games";

export default () => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} />
    <AppliedRoute path="/games/new" exact component={NewGame} />
    <AppliedRoute path="/games/:id" exact component={Games} />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
