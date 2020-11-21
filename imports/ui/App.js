import { Box, Flex, Heading, IconButton, Input } from "theme-ui";
import { Moon, Sun } from "react-feather";
import AppContext from "./AppContext";
import React from "react";
import Story from "./Story";
import UserToggle from "./UserToggle";
import { Edit2, ArrowDownCircle, Trash, X } from "react-feather";
import { StoriesCollection } from "../api/stories";

const App = () => (
  <AppContext.Consumer>
    {(props) => {
      const selectedRef =
        props.selectedId && StoriesCollection.findOne(props.selectedId);
      return (
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
                  <Input
                    value={selectedRef.text}
                    onChange={(event) =>
                      StoriesCollection.update(selectedRef._id, {
                        $set: { text: event.target.value },
                      })
                    }
                  />
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
      );
    }}
  </AppContext.Consumer>
);

export default App;
