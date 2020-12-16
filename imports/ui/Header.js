import { Flex, Text, Input } from "theme-ui";
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
      p: 3,
      top: 0,
      width: "100wv",
      zIndex: 1,
    }}
  >
    <Nav />
    <Flex sx={{ px: 3, width: "ref" }}>
      <Input
        type="search"
        placeholder="Search"
        sx={{ variant: "input.default" }}
      />
    </Flex>
    <Flex sx={{ width: 36, justifyContent: "flex-end" }}>
      <ColorModeToggle />
      <AccountToggle sx={{ ml: 2, minWidth: "auto" }} />
    </Flex>
  </Flex>
);

export default Header;
