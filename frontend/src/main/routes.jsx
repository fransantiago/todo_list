import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Menu from "../templates/Menu";
import Todo from "../todo/Todo";
import About from "../about/about";

export default props => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos" />
    </Switch>
  </BrowserRouter>
);
