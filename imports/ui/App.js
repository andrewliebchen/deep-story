import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RefStory from "./RefStory";
import React from "react";
import RefsList from "./RefsList";
import Sandbox from "./Sandbox";
import AccountToggle from "./AccountToggle";
import Nav from "./Nav";
import { Box } from "theme-ui";

const App = (props) => (
  <Box sx={{ position: "relative", width: "100vw" }}>
    <Nav sx={{ position: "fixed", top: 3, left: 3 }} />
    <AccountToggle sx={{ position: "fixed", top: 3, right: 3 }} />

    <Router>
      <Switch>
        <Route path="/refs/:refId" component={RefStory} />
        <Route path="/refs" component={RefsList} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Box>
);

export default App;
