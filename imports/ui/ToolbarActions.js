import { Button, Flex, IconButton, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { Link } from "react-router-dom";
import { refTypes } from "../utils/types";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";

const ToolbarActions = (props) => {
  const {
    getRef,
    selectedRefId,
    setSelectedRefId,
    newMockType,
    setNewMockType,
  } = useContext(AppContext);
  let actions = props.actions;

  if (!isReady(props.actions) && selectedRefId) {
    switch (getRef(selectedRefId).type) {
      case "break":
        actions = (
          <>
            {Object.keys(refTypes).map((type) => (
              <IconButton
                key={type}
                children={refTypes[type].icon}
                title={type}
                onClick={() => setNewMockType(type)}
                sx={{
                  variant: `iconButton.${
                    type === newMockType ? "floatingPrimary" : "floating"
                  }`,
                  mx: 1,
                }}
              />
            ))}
          </>
        );
        break;
      default:
        actions = (
          <>
            <IconButton
              variant="iconButton.floating"
              children={<UilTimes />}
              onClick={() => setSelectedRefId(false)}
            />
            <IconButton
              sx={{ mx: 2, variant: "iconButton.floatingNegative" }}
              children={<UilTrash />}
              // onClick={() =>
              //   window.confirm("You sure you want to delete this?") &&
              //   Meteor.call("refs.remove", selectedRefId)
              // }
            />
            <Link to={`/refs/${selectedRefId}`}>
              <Button variant="button.floatingPrimary">
                <UilArrowDown />
                <Text ml={2}>Dive</Text>
              </Button>
            </Link>
          </>
        );
    }
  }

  return (
    <Flex
      sx={{
        alignItems: "center",
        position: "fixed",
        top: 2,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      {actions}
    </Flex>
  );
};

ToolbarActions.propTypes = {
  actions: PropTypes.node,
};

export default ToolbarActions;
