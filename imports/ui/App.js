import { Box, Flex, IconButton } from "theme-ui";
import { Edit2, ArrowDownCircle, Trash, X } from "react-feather";
import { isReady } from "../utils/helpers";
import { Moon, Sun } from "react-feather";
import { useParams, Link } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import React, { useContext, useEffect } from "react";
import Story from "./Story";

const App = () => {
  const {
    colorMode,
    selectedRefId,
    setColorMode,
    setParentId,
    parentRef,
  } = useContext(AppContext);
  const { refId } = useParams();

  // Can only get the params inside the router. Pass this to the provider
  useEffect(() => setParentId(refId));

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
          {selectedRefId && (
            <Flex sx={{ alignItems: "center" }}>
              {isReady(parentRef) && (
                <Link to={`/r/${parentRef.parentId}`}>{parentRef.text}</Link>
              )}
              <Link to={`/r/${selectedRefId}`}>
                <IconButton>
                  <ArrowDownCircle />
                </IconButton>
              </Link>
              <IconButton
                onClick={() =>
                  window.confirm("You sure you want to delete this?") &&
                  Meteor.call("refs.remove", selectedRefId)
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
        <Story />
      </Box>
    </Flex>
  );
};

export default App;
