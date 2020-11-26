import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import React from "react";

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
