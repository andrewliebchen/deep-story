import { Box } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import BaseRefsList from "./BaseRefsList";
import Nav from "./Nav";
import React from "react";
import RefStory from "./RefStory";
import Sandbox from "./Sandbox";

const App = (props) => (
  <Router>
    <Box sx={{ position: "relative", width: "100vw" }}>
      <Nav sx={{ position: "fixed", top: 3, left: 3 }} />
      <AccountToggle sx={{ position: "fixed", top: 3, right: 3 }} />
      <Switch>
        <Route path="/refs/:parentRefId" component={RefStory} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/" component={BaseRefsList} />
      </Switch>
    </Box>
  </Router>
);

export default App;
