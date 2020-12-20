import { Flex } from "theme-ui";
import { useAccount } from "../utils/hooks";
import { useHistory } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import Nav from "./Nav";
import React from "react";
import Search from "./Search";

const Header = () => {
  const { userId } = useAccount();
  const history = useHistory();

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
      <Search />
      <AccountToggle sx={{ minWidth: "auto" }} />
    </Flex>
  );
};

export default Header;
