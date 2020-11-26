import { Box, Flex, Heading, IconButton, Input } from "theme-ui";
import { Edit2, ArrowDownCircle, Trash, X } from "react-feather";
import { Moon, Sun } from "react-feather";
import { RefsCollection } from "../api/refs";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import React from "react";
import Refs from "./Refs";

const App = (routeProps) => {
  return (
    <AppContext.Consumer>
      {(props) => {
        // Rather than doing this here, we can do this back in AppProvider,
        // the component should just consume. There's a hook or something to
        // get the route props in the provider, I bet.
        const ref = RefsCollection.findOne(routeProps.match.params.refId);

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
                      value={ref.text}
                      onChange={(event) =>
                        RefsCollection.update(ref._id, {
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
              <Refs />
            </Box>
          </Flex>
        );
      }}
    </AppContext.Consumer>
  );
};

export default App;
