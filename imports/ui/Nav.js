import { Box, Flex, Button } from "theme-ui";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const navigate = (route) => {
    history.push(route);
    setShowMenu(false);
  };

  return (
    <Flex
      sx={{ size: "control", position: "absolute", top: 3, left: 3, zIndex: 3 }}
    >
      <Button onClick={() => setShowMenu(true)} variant="button.background">
        <UilSearch />
      </Button>
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
              sx={{ variant: "button.secondary" }}
              onClick={() => navigate("/refs")}
            >
              All refs
            </Button>
            <Button
              sx={{ variant: "button.secondary", mt: 2 }}
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
