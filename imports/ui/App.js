import { Box, Flex, Heading, IconButton, Input } from "theme-ui";
import { Edit2, ArrowDownCircle, Trash, X } from "react-feather";
import { Moon, Sun } from "react-feather";
import { RefsCollection } from "../api/refs";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import React from "react";
import Story from "./Story";

const App = () => (
  <AppContext.Consumer>
    {(props) => {
      const selectedRef =
        props.selectedId && RefsCollection.findOne(props.selectedId);
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
                      RefsCollection.update(selectedRef._id, {
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
                      RefsCollection.remove(props.selectedId)
                    }
                  >
                    <Trash />
                  </IconButton>
                </Flex>
              )}
              <Flex ml="auto" sx={{ alignItems: "center" }}>
                <IconButton
                  mr={2}
                  title="Toggle color mode"
                  onClick={() =>
                    props.setColorMode(
                      props.colorMode === "default" ? "dark" : "default"
                    )
                  }
                >
                  {props.colorMode === "default" ? <Moon /> : <Sun />}
                </IconButton>
                <AccountToggle />
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
