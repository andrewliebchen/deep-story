import { Box } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import React from "react";
import RefStory from "./RefStory";
import Sandbox from "./Sandbox";
import AssignedTasksView from "./AssignedTasksView";
import Toasts from "./Toasts";

const App = (props) => (
  <Router>
    <Header />
    <Box sx={{ position: "relative", width: "100vw" }}>
      <Switch>
        <Route path="/refs/:parentRefId" component={RefStory} />
        <Route path="/tasks" component={AssignedTasksView} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/" component={RefStory} />
      </Switch>
    </Box>
    <Toasts />
  </Router>
);

export default App;
