import { Button } from "theme-ui";
import { Home } from "react-feather";
import { Link } from "react-router-dom";
import React from "react";

const Nav = (props) => (
  <Link to="/refs">
    <Button variant="button.secondary" children={<Home />} />
  </Link>
);

export default Nav;
