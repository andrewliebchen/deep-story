import { Box, Flex, Heading, IconButton } from "theme-ui";
import { Moon, Sun } from "react-feather";
import AppContext from "./AppContext";
import React from "react";
import Story from "./Story";
import UserToggle from "./UserToggle";

const App = () => (
  <AppContext.Consumer>
    {(props) => (
      <Flex sx={{ justifyContent: "center" }}>
        <Box sx={{ m: 3, width: "container" }}>
          <Flex
            sx={{
              mb: 3,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <UserToggle />
            <IconButton
              title="Toggle color mode"
              onClick={() =>
                props.setColorMode(
                  props.colorMode === "default" ? "dark" : "default"
                )
              }
            >
              {props.colorMode === "default" ? <Moon /> : <Sun />}
            </IconButton>
          </Flex>
          <Story {...props} />
        </Box>
      </Flex>
    )}
  </AppContext.Consumer>
);

export default App;
