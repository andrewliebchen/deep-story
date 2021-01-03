import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AccountToggle from "./AccountToggle";
import AssignedTasksView from "./AssignedTasksView";
import Nav from "./Nav";
import React from "react";
import RefStory from "./RefStory";
import Toasts from "./Toasts";
import { useAccount } from "../utils/hooks";
import Login from "./Login";
import { Flex, Box } from "theme-ui";

const App = (props) => {
  const { isLoggedIn } = useAccount();

  return (
    <Router>
      {isLoggedIn ? (
        <Flex sx={{ width: "100vw", p: 3, justifyContent: "space-between" }}>
          <Nav />
          <AccountToggle />
        </Flex>
      ) : (
        <Redirect to="/login" />
      )}
      <Switch>
        <Route path="/refs/:parentRefId" component={RefStory} />
        <Route path="/tasks" component={AssignedTasksView} />
        <Route path="/login" component={Login} />
        <Route path="/" component={RefStory} />
      </Switch>
      <Toasts />
    </Router>
  );
};

export default App;
