import { Flex, IconButton, Text } from "theme-ui";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefContent from "./RefContent";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilCheck from "@iconscout/react-unicons/icons/uil-check";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import useHover from "@react-hook/hover";
import ultralightCopy from "copy-to-clipboard-ultralight";
import { isReady } from "../utils/helpers";
import { useHistory } from "react-router-dom";

import { RefsCollection } from "../api/refs";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId, setToastMessage } = useContext(
    AppContext
  );
  const history = useHistory();

  const isSelected = selectedRefId === props._id;

  const target = React.useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex
      ref={target}
      sx={{
        variant: "flex.refWrapper",
        bg: isSelected && "primaryMuted",
        "&:hover": {
          bg: isSelected || "muted",
        },
      }}
    >
      {(isSelected || isHovering) && (
        <IconButton
          onClick={() =>
            setSelectedRefId(selectedRefId === props._id || props._id)
          }
          sx={{
            variant: `iconButton.${isSelected ? "whitePositive" : "white"}`,
            position: "absolute",
            left: 3,
          }}
          children={isSelected ? <UilCheck /> : <UilPen />}
        />
      )}
      {isHovering && (
        <Flex variant="flex.refRightButtons">
          {isSelected && (
            <IconButton
              onClick={() =>
                window.confirm("Are you sure you want to delete this ref?") &&
                Meteor.call("refs.remove", props._id)
              }
              sx={{
                variant: "iconButton.white",
                color: "negative",
                mr: 2,
                "&:hover": {
                  bg: "negativeBackground",
                },
              }}
              children={<UilTrash />}
            />
          )}
          <IconButton
            onClick={() => history.push(`/refs/${props._id}`)}
            variant="iconButton.primary"
            children={<UilArrowRight />}
          />
        </Flex>
      )}
      <RefContent {...props} />
    </Flex>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  rank: PropTypes.number,
};

export default Ref;
