import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AssignedTasksView from "./AssignedTasksView";
import React from "react";
import RefStory from "./RefStory";
import Toasts from "./Toasts";
import { useAccount } from "../utils/hooks";
import Login from "./Login";
import Header from "./Header";

const App = (props) => {
  const { isLoggedIn } = useAccount();

  return (
    <Router>
      {isLoggedIn ? <Header /> : <Redirect to="/login" />}
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
