import { Box } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BaseRefsList from "./BaseRefsList";
import React from "react";
import RefStory from "./RefStory";
import Sandbox from "./Sandbox";
import Toasts from "./Toasts";
import Header from "./Header";

const App = (props) => (
  <Router>
    <Header />
    <Box sx={{ position: "relative", width: "100vw" }}>
      <Switch>
        <Route path="/refs/:parentRefId" component={RefStory} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/" component={BaseRefsList} />
      </Switch>
    </Box>
    <Toasts />
  </Router>
);

export default App;
