import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// render={routeProps => (
//   <SpaceProvider {...routeProps}>
//     <NewAnimal />
//   </SpaceProvider>
// )

const Routes = (props) => (
  <Router>
    <Switch>
      <Route path="/r/:refId" component={App} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
