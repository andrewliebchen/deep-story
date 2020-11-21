import { Box, Flex, Heading, IconButton } from "theme-ui";
import { Moon, Sun } from "react-feather";
import AppContext from "./AppContext";
import React from "react";
import Story from "./Story";
import UserToggle from "./UserToggle";
import { Edit2, ArrowDownCircle, Trash, X } from "react-feather";

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
            {props.selectedId && (
              <Flex>
                <IconButton onClick={() => props.setEditing(true)}>
                  <Edit2 />
                </IconButton>
                <IconButton onClick={() => console.log("Dive!")}>
                  <ArrowDownCircle />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.confirm("You sure you want to delete this?") &&
                    StoriesCollection.remove(props.selectedId)
                  }
                >
                  <Trash />
                </IconButton>
              </Flex>
            )}
            <Flex ml="auto">
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
          </Flex>
          <Story {...props} />
        </Box>
      </Flex>
    )}
  </AppContext.Consumer>
);

export default App;
