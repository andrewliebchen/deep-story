import React from "react";
import { IconButton } from "theme-ui";
import UilArrowLeft from "@iconscout/react-unicons/icons/uil-arrow-left";

const Nav = (props) => (
  <IconButton {...props}>
    <UilArrowLeft />
  </IconButton>
);

export default Nav;
