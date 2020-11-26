import { Box, Flex, Heading, IconButton, Input } from "theme-ui";
import { Edit2, ArrowDownCircle, Trash, X } from "react-feather";
import { Moon, Sun } from "react-feather";
import { RefsCollection } from "../api/refs";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import Story from "./Story";

const App = () => {
  const { colorMode, refs, selectedId, setColorMode, story } = useContext(
    AppContext
  );
  const selectedRef = refs.find((ref) => ref._id === selectedId);

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
          {selectedId && (
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
                setColorMode(colorMode === "default" ? "dark" : "default")
              }
            >
              {colorMode === "default" ? <Moon /> : <Sun />}
            </IconButton>
            <AccountToggle />
          </Flex>
        </Flex>
        {story && <Story />}
      </Box>
    </Flex>
  );
};

export default App;
