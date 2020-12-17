import { Flex, Text, IconButton, Input } from "theme-ui";
import { isReady } from "../utils/helpers";
import AccountToggle from "./AccountToggle";
import Nav from "./Nav";
import React from "react";
import { controlHeight } from "../utils/theme";
import { useHistory } from "react-router-dom";
import { useAccount } from "../utils/hooks";

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
      <Flex sx={{ px: 3, width: "ref" }}>
        <Input
          type="search"
          placeholder="Search"
          sx={{ variant: "input.default" }}
        />
      </Flex>
      <AccountToggle sx={{ minWidth: "auto" }} />
    </Flex>
  );
};

export default Header;
