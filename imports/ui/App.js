import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import AssignedTasksView from "./AssignedTasksView";
import Nav from "./Nav";
import React from "react";
import RefStory from "./RefStory";
import Sandbox from "./Sandbox";
import Toasts from "./Toasts";

const App = (props) => (
  <Router>
    <Nav />
    <AccountToggle sx={{ minWidth: "auto" }} />
    <Switch>
      <Route path="/refs/:parentRefId" component={RefStory} />
      <Route path="/tasks" component={AssignedTasksView} />
      <Route path="/sandbox" component={Sandbox} />
      <Route path="/" component={RefStory} />
    </Switch>
    <Toasts />
  </Router>
);

export default App;
