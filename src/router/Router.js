import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="*" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}
