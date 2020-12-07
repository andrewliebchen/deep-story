import { Box, Button, Flex, IconButton, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { Link, useParams, useHistory } from "react-router-dom";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import ColorModeToggle from "./ColorModeToggle";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import ToolbarActions from "./ToolbarActions";
import UilArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";

const Toolbar = (props) => {
  const { getRef, userId } = useContext(AppContext);
  const { refId } = useParams();
  const history = useHistory();

  const parentRef = getRef(refId);
  const grandparentId = isReady(parentRef) && parentRef.parentId;

  return (
    <>
      <Flex sx={{ top: 2, left: 2, position: "fixed", zIndex: 1 }}>
        <Link to="/refs">
          <IconButton sx={{ variant: "iconButton.floating", mr: 2 }}>
            <UilPen />
          </IconButton>
        </Link>
        {grandparentId && (
          <Link to={`/refs/${parentRef.parentId}`}>
            <Button variant="button.floating">
              <UilArrowUp />
              <Text sx={{ variant: "ref", ml: 2 }}>{parentRef.text}</Text>
            </Button>
          </Link>
        )}
      </Flex>

      <ToolbarActions {...props} />

      <Flex
        ml="auto"
        sx={{
          alignItems: "center",
          position: "fixed",
          top: 2,
          right: 2,
          zIndex: 1,
        }}
      >
        <Box mr={2}>
          <ColorModeToggle />
        </Box>
        <AccountToggle />
      </Flex>
    </>
  );
};

Toolbar.propTypes = {
  actions: PropTypes.node,
};

export default Toolbar;
