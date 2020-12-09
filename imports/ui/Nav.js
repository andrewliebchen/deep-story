import { IconButton } from "theme-ui";
import { useHistory } from "react-router-dom";
import React from "react";
import UilArrowLeft from "@iconscout/react-unicons/icons/uil-arrow-left";

const Nav = (props) => {
  const history = useHistory();

  console.log(history);

  return (
    <IconButton
      onClick={() => history.goBack()}
      variant="iconButton.default"
      {...props}
    >
      <UilArrowLeft />
    </IconButton>
  );
};

export default Nav;
