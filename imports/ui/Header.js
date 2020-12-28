import { Flex, Button } from "theme-ui";
import { useAccount } from "../utils/hooks";
import { useHistory, useLocation } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import Nav from "./Nav";
import React from "react";
import Search from "./Search";

const Header = () => {
  const { userId } = useAccount();
  const history = useHistory();
  const location = useLocation();

  return (
    <Flex
      sx={{
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
      <Search showFilter={location.pathname === "/refs"} />

      <AccountToggle sx={{ minWidth: "auto" }} />
    </Flex>
  );
};

export default Header;
