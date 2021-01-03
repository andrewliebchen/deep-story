import { Box, Flex, Button } from "theme-ui";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Search as SearchIcon } from "react-feather";
import Search from "./Search";

const Nav = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Flex>
      <Button
        onClick={() => setShowSearch(true)}
        variant="button.background"
        children={<SearchIcon />}
      />
      {showSearch && (
        <Search
          selectRef={() => setShowSearch(false)}
          closeSearch={() => setShowSearch(false)}
        />
      )}
    </Flex>
  );
};

export default Nav;
