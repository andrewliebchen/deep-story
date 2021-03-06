import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";
import AppContext from "./AppContext";
import AssignedTasksView from "./AssignedTasksView";
import Login from "./Login";
import React, { useContext, useEffect } from "react";
import RefEdit from "./RefEdit";
import RefStory from "./RefStory";
import Search from "./Search";
import Toasts from "./Toasts";
import { useAccount } from "../utils/hooks";

const App = (props) => {
  const { showGlobalSearch, setShowGlobalSearch } = useContext(AppContext);

  useHotkeys("esc", () => setShowGlobalSearch(false));

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/refs/:refId/edit" component={RefEdit} />
        <Route path="/refs/:parentRefId" component={RefStory} />
        <Route path="/tasks" component={AssignedTasksView} />
        <Route path="/login" component={Login} />
        <Route path="/" component={RefStory} />
      </Switch>
      <Toasts />
      {showGlobalSearch && (
        <Search selectRef={() => setShowGlobalSearch(false)} />
      )}
    </BrowserRouter>
  );
};

export default App;
