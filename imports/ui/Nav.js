import { IconButton } from "theme-ui";
import { useHistory } from "react-router-dom";
import React from "react";
import UilHomeAlt from "@iconscout/react-unicons/icons/uil-home-alt";

const Nav = (props) => {
  const history = useHistory();

  return (
    <IconButton variant="iconButton.default" {...props}>
      <UilHomeAlt />
    </IconButton>
  );
};

export default Nav;
