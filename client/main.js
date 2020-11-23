import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ThemeProvider } from "theme-ui";
import Routes from "../imports/ui/Routes";
import React from "react";
import theme from "../imports/utils/theme";
import AppProvider from "../imports/ui/AppProvider";

Meteor.startup(() => {
  render(
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>,
    document.getElementById("react-target")
  );
});
