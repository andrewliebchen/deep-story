import { Box, Flex, Button } from "theme-ui";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Search as SearchIcon } from "react-feather";
import Search from "./Search";

const Nav = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Flex
      sx={{ size: "control", position: "absolute", top: 3, left: 3, zIndex: 3 }}
    >
      <Button
        onClick={() => setShowSearch(true)}
        variant="button.background"
        children={<SearchIcon />}
      />
      {showSearch && <Search selectRef={() => setShowSearch(false)} />}
    </Flex>
  );
};

export default Nav;
