import { IconButton, Box, Flex, Button } from "theme-ui";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import UilHomeAlt from "@iconscout/react-unicons/icons/uil-home-alt";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const navigate = (route) => {
    history.push(route);
    setShowMenu(false);
  };

  return (
    <Flex size="control">
      <IconButton
        onClick={() => setShowMenu(true)}
        title="Back to home"
        variant="iconButton.default"
      >
        <UilHomeAlt />
      </IconButton>
      {showMenu && (
        <Flex sx={{ variant: "flex.overlayBackground", zIndex: 3 }}>
          <Flex
            sx={{
              variant: "flex.ref",
              borderRadius: 5,
              boxShadow: "overlay",
            }}
          >
            <Button
              sx={{ variant: "button.default" }}
              onClick={() => navigate("/refs")}
            >
              All refs
            </Button>
            <Button
              sx={{ variant: "button.default", mt: 2 }}
              onClick={() => navigate("/tasks")}
            >
              Your tasks
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Nav;
