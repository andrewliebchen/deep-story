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
import { Box } from "theme-ui";

const App = (props) => {
  const { isLoggedIn } = useAccount();

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Nav />
          <Box sx={{ position: "absolute", top: 3, right: 3, zIndex: 2 }}>
            <AccountToggle sx={{ minWidth: "auto" }} />
          </Box>
          <Toasts />
        </>
      ) : (
        <Redirect to="/login" />
      )}
      <Switch>
        <Route path="/refs/:parentRefId" component={RefStory} />
        <Route path="/tasks" component={AssignedTasksView} />
        <Route path="/login" component={Login} />
        <Route path="/" component={RefStory} />
      </Switch>
    </Router>
  );
};

export default App;
