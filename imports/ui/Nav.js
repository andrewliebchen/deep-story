import { Box, Flex, Button } from "theme-ui";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Home } from "react-feather";

const Nav = (props) => (
  <Link to="/refs">
    <Button variant="button.secondary" children={<Home />} />
  </Link>
);

export default Nav;
