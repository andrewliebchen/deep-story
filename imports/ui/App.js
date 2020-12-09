import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RefStory from "./RefStory";
import React from "react";
import Sandbox from "./Sandbox";
import AccountToggle from "./AccountToggle";
import Nav from "./Nav";
import { Box } from "theme-ui";
import BaseRefsList from "./BaseRefsList";

const App = (props) => (
  <Box sx={{ position: "relative", width: "100vw" }}>
    <Nav sx={{ position: "fixed", top: 3, left: 3 }} />
    <AccountToggle sx={{ position: "fixed", top: 3, right: 3 }} />

    <Router>
      <Switch>
        <Route path="/refs/:refId" component={RefStory} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/" component={BaseRefsList} />
      </Switch>
    </Router>
  </Box>
);

export default App;
