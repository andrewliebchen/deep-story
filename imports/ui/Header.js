import React from "react";
import { Flex, Text } from "theme-ui";
import AccountToggle from "./AccountToggle";
import ColorModeToggle from "./ColorModeToggle";
import Sandbox from "./Sandbox";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useGetRef } from "../utils/hooks";
import { isReady } from "../utils/helpers";

const Header = () => {
  const { parentRefId } = useParams();
  const parentRef = useGetRef(parentRefId);

  return (
    <Flex
      sx={{
        bg: "background",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        px: 3,
        py: 2,
        top: 0,
        width: "100wv",
        zIndex: 1,
      }}
    >
      <Nav />
      <Flex>
        <ColorModeToggle />
        <AccountToggle sx={{ ml: 2 }} />
      </Flex>
    </Flex>
  );
};

export default Header;
