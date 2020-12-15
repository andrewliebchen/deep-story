import { Flex, IconButton, Text } from "theme-ui";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import RefContent from "./RefContent";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import useHover from "@react-hook/hover";
import ultralightCopy from "copy-to-clipboard-ultralight";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId, setToastMessage } = useContext(
    AppContext
  );

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
            variant: "iconButton.white",
            position: "absolute",
            left: 3,
          }}
          children={isSelected ? <UilTimes /> : <UilPen />}
        />
      )}
      {isSelected && (
        <Flex variant="flex.refRightButtons">
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
          <IconButton
            onClick={() =>
              Meteor.call(
                "refs.insert",
                {
                  type: "text",
                  parentId: props._id,
                  rank: 1,
                },
                (error, id) => {
                  setSelectedRefId(id);
                  window.location.href = `/refs/${props._id}`;
                }
              )
            }
            variant="iconButton.primary"
            children={<UilPlus />}
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
