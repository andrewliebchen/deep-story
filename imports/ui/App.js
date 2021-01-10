import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppContext from "./AppContext";
import AssignedTasksView from "./AssignedTasksView";
import Login from "./Login";
import React, { useContext } from "react";
import RefEdit from "./RefEdit";
import RefStory from "./RefStory";
import Search from "./Search";
import Toasts from "./Toasts";

const App = (props) => {
  const { showGlobalSearch, setShowGlobalSearch } = useContext(AppContext);

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
        <Search
          selectRef={() => setShowGlobalSearch(false)}
          closeSearch={() => setShowGlobalSearch(false)}
        />
      )}
    </BrowserRouter>
  );
};

export default App;
