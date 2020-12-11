import { Box, Flex } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import BaseRefsList from "./BaseRefsList";
import Nav from "./Nav";
import React from "react";
import RefStory from "./RefStory";
import Sandbox from "./Sandbox";
import Toasts from "./Toasts";
import ColorModeToggle from "./ColorModeToggle";

const App = (props) => (
  <Router>
    <Box sx={{ position: "relative", width: "100vw" }}>
      <Flex
        sx={{
          bg: "background",
          justifyContent: "space-between",
          position: "sticky",
          px: 3,
          py: 2,
          top: 0,
          width: "100wv",
          zIndex: 1,
        }}
      >
        <Nav />
        <Flex>
          <ColorModeToggle />
          <AccountToggle sx={{ ml: 2 }} />
        </Flex>
      </Flex>
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
