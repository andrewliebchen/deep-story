import { Box, Button, Flex, IconButton, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { refTypes } from "../utils/types";
import { Link } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import ColorModeToggle from "./ColorModeToggle";
import React, { useContext } from "react";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import UilArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import UilFileBlank from "@iconscout/react-unicons/icons/uil-file-blank";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

const Toolbar = () => {
  const { selectedRefId, parentRef, userId, setSelectedRefId } = useContext(
    AppContext
  );

  return (
    <>
      <Flex sx={{ top: 2, left: 2, position: "fixed", zIndex: 1 }}>
        <Link to={`/r/${userId}`}>
          <IconButton variant="iconButton.floating" mr={2}>
            <UilFileBlank />
          </IconButton>
        </Link>
        {isReady(parentRef) && (
          <Link to={`/r/${parentRef.parentId}`}>
            <Button variant="button.floating">
              <UilArrowUp />
              <Text sx={{ variant: "ref", ml: 2 }}>{parentRef.text}</Text>
            </Button>
          </Link>
        )}
      </Flex>

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
        {selectedRefId ? (
          <>
            <IconButton
              variant="iconButton.floating"
              children={<UilTimes />}
              onClick={() => setSelectedRefId("")}
            />
            <IconButton
              sx={{ mx: 2, variant: "iconButton.floatingNegative" }}
              children={<UilTrash />}
              onClick={() =>
                window.confirm("You sure you want to delete this?") &&
                Meteor.call("refs.remove", selectedRefId)
              }
            />
            <Link to={`/r/${selectedRefId}`}>
              <Button variant="button.floatingPrimary">
                <UilArrowDown />
                <Text ml={2}>Dive</Text>
              </Button>
            </Link>
          </>
        ) : (
          <>
            {Object.keys(refTypes).map((type) => (
              <IconButton
                key={type}
                children={refTypes[type].icon}
                title={type}
                sx={{ mx: 1, variant: "iconButton.floating" }}
              />
            ))}
          </>
        )}
      </Flex>

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
