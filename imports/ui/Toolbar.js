import React, { useContext } from "react";
import { Box, Button, Flex, IconButton, Text } from "theme-ui";
import { Link } from "react-router-dom";
import { Edit2, X } from "react-feather";
import AppContext from "./AppContext";
import AccountToggle from "./AccountToggle";
import ColorModeToggle from "./ColorModeToggle";
import { isReady } from "../utils/helpers";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import UilArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import UilFileBlank from "@iconscout/react-unicons/icons/uil-file-blank";

const Toolbar = () => {
  const { selectedRefId, parentRef, userId } = useContext(AppContext);

  return (
    <>
      <Flex sx={{ top: 2, left: 2, position: "fixed", zIndex: 1 }}>
        <Link to={`/r/${userId}`}>
          <IconButton variant="iconButton.default" mr={2}>
            <UilFileBlank />
          </IconButton>
        </Link>
        {isReady(parentRef) && (
          <Link to={`/r/${parentRef.parentId}`}>
            <Button variant="button.default">
              <UilArrowUp />
              <Text ml={3}>{parentRef.text}</Text>
            </Button>
          </Link>
        )}
      </Flex>

      {selectedRefId && (
        <Flex
          sx={{
            alignItems: "center",
            position: "fixed",
            top: 2,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          <IconButton
            variant="iconButton.negative"
            mr={2}
            onClick={() =>
              window.confirm("You sure you want to delete this?") &&
              Meteor.call("refs.remove", selectedRefId)
            }
          >
            <UilTrash />
          </IconButton>
          <Link to={`/r/${selectedRefId}`}>
            <Button variant="button.primary">
              <UilArrowDown />
              <Text ml={3}>Dive</Text>
            </Button>
          </Link>
        </Flex>
      )}
      <Flex
        ml="auto"
        sx={{
          alignItems: "center",
          position: "fixed",
          top: 2,
          right: 2,
          zIndex: 1,
        }}
      >
        <Box mr={2}>
          <ColorModeToggle />
        </Box>
        <AccountToggle />
      </Flex>
    </>
  );
};

export default Toolbar;
