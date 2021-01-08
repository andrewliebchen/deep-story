import React from "react";
import Nav from "./Nav";
import AccountToggle from "./AccountToggle";
import { Flex } from "theme-ui";
import { Search } from "react-feather";

const Header = (props) => (
  <Flex
    sx={{
      alignItems: "center",
      width: "100vw",
      p: 4,
      justifyContent: "space-between",
      bg: "background",
      position: "sticky",
      top: 0,
      zIndex: 1,
    }}
  >
    <Nav />
    <Flex
      sx={{
        bg: "muted",
        width: "ref",
        height: "control",
        borderRadius: 3,
        cursor: "pointer",
        color: "textSecondary",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => setShowGlobalSearch(true)}
    >
      <Search />
    </Flex>
    <AccountToggle />
  </Flex>
);

export default Header;
