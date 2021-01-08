import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AssignedTasksView from "./AssignedTasksView";
import React, { useContext } from "react";
import RefStory from "./RefStory";
import Toasts from "./Toasts";
import { useAccount } from "../utils/hooks";
import Login from "./Login";
import Header from "./Header";
import AppContext from "./AppContext";
import Search from "./Search";
import { useHotkeys } from "react-hotkeys-hook";
import RefEdit from "./RefEdit";

const App = (props) => {
  const {
    showGlobalSearch,
    setShowGlobalSearch,
    setSelectedRefId,
  } = useContext(AppContext);
  const { isLoggedIn } = useAccount();

  useHotkeys("esc", () => setSelectedRefId(""));

  return (
    <BrowserRouter>
      {isLoggedIn ? <Header /> : <Redirect to="/login" />}
      <Switch>
        <Route path="/refs/:refId/edit" component={RefEdit} />

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
    </BrowserRouter>
  );
};

export default App;
