import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import React from "react";
import Sandbox from "./Sandbox";

const Routes = (props) => (
  <Router>
    <Switch>
      <Route path="/refs/:refId" component={App} />
      <Route path="/sandbox" component={Sandbox} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
