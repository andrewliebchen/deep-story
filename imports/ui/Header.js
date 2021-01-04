import React from "react";
import Nav from "./Nav";
import AccountToggle from "./AccountToggle";
import { Flex } from "theme-ui";
import Toolbar from "./Toolbar";

const Header = (props) => (
  <Flex
    sx={{
      alignItems: "center",
      width: "100vw",
      p: 4,
      justifyContent: "space-between",
    }}
  >
    <Nav />
    <Toolbar />
    <AccountToggle />
  </Flex>
);

export default Header;
