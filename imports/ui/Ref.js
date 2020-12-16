import { Flex, IconButton, useColorMode } from "theme-ui";
import { useHistory } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import RefContent from "./RefContent";
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import UilCornerUpLeft from "@iconscout/react-unicons/icons/uil-corner-up-left";
import UilCornerRightDown from "@iconscout/react-unicons/icons/uil-corner-right-down";
import UilCheck from "@iconscout/react-unicons/icons/uil-check";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import useHover from "@react-hook/hover";

import theme from "../utils/theme";

import { RefsCollection } from "../api/refs";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId, setToastMessage } = useContext(
    AppContext
  );
  const [colorMode, setColorMode] = useColorMode();
  const history = useHistory();

  const isSelected = selectedRefId === props._id;

  const target = React.useRef(null);
  const isHovering = useHover(target);

  useEffect(
    () => setColorMode(props.type === "base" ? "text" : props.type),
    []
  );

  return (
    <Flex
      ref={target}
      sx={{
        variant: "flex.refWrapper",
        bg: isSelected ? "primaryMuted" : props.isParentRef && "muted",
        mb: props.isParentRef && 3,
        "&:hover": {
          bg: isSelected || "muted",
        },
      }}
    >
      <Flex variant="flex.refLeftButtons">
        {isHovering &&
          (props.isParentRef ? (
            <IconButton
              onClick={() => history.goBack()}
              variant="iconButton.background"
              children={<UilCornerUpLeft />}
              title="Back to parent"
            />
          ) : (
            <IconButton
              onClick={() => history.push(`/refs/${props._id}`)}
              variant="iconButton.background"
              children={<UilCornerRightDown />}
              title="Show children"
            />
          ))}
      </Flex>
      <Flex variant="flex.refRightButtons">
        {isSelected && (
          <IconButton
            onClick={() =>
              window.confirm("Are you sure you want to delete this ref?") &&
              Meteor.call("refs.remove", props._id)
            }
            sx={{
              variant: "iconButton.background",
              color: "negative",
              mr: 2,
              "&:hover": {
                bg: "negativeBackground",
              },
            }}
            children={<UilTrash />}
            title="Delete"
          />
        )}
        {(isHovering || isSelected) && (
          <IconButton
            onClick={() =>
              setSelectedRefId(selectedRefId === props._id || props._id)
            }
            sx={{
              variant: `iconButton.${isSelected ? "primary" : "background"}`,
            }}
            children={isSelected ? <UilCheck /> : <UilPen />}
            title={isSelected ? "Finish" : "Edit"}
          />
        )}
      </Flex>

      <RefContent {...props} />
    </Flex>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  rank: PropTypes.number,
  isParentRef: PropTypes.bool,
};

export default Ref;
