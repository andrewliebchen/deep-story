import { Flex, Text, IconButton, Input } from "theme-ui";
import { isReady } from "../utils/helpers";
import AccountToggle from "./AccountToggle";
import Nav from "./Nav";
import React from "react";
import { controlHeight } from "../utils/theme";
import { useHistory } from "react-router-dom";
import { useAccount } from "../utils/hooks";
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
