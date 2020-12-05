import { Box, Button, Flex, IconButton, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { Link } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import ColorModeToggle from "./ColorModeToggle";
import React, { useContext } from "react";
import UilFileBlank from "@iconscout/react-unicons/icons/uil-file-blank";

const Toolbar = (props) => {
  const { parentRef, userId } = useContext(AppContext);

  return (
    <>
      <Flex sx={{ top: 2, left: 2, position: "fixed", zIndex: 1 }}>
        <Link to={`/refs/${userId}`}>
          <IconButton variant="iconButton.floating" mr={2}>
            <UilFileBlank />
          </IconButton>
        </Link>
        {isReady(parentRef) && (
          <Link to={`/refs/${parentRef.parentId}`}>
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
        {props.children}
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
