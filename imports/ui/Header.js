import { Flex, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import AccountToggle from "./AccountToggle";
import ColorModeToggle from "./ColorModeToggle";
import Nav from "./Nav";
import React from "react";
import Sandbox from "./Sandbox";

const Header = () => (
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

export default Header;
