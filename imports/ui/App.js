import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AssignedTasksView from "./AssignedTasksView";
import React, { useContext } from "react";
import RefStory from "./RefStory";
import Toasts from "./Toasts";
import { useAccount } from "../utils/hooks";
import Login from "./Login";
import Header from "./Header";
import AppContext from "./AppContext";
import Search from "./Search";

const App = (props) => {
  const { showGlobalSearch, setShowGlobalSearch } = useContext(AppContext);
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
      {showGlobalSearch && (
        <Search
          selectRef={() => setShowGlobalSearch(false)}
          closeSearch={() => setShowGlobalSearch(false)}
        />
      )}
    </Router>
  );
};

export default App;
