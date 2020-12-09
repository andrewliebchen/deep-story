import { Flex, IconButton } from "theme-ui";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import useHover from "@react-hook/hover";

const Ref = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);

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
        <IconButton
          onClick={() =>
            window.confirm("Are you sure you want to delete this ref?") &&
            Meteor.call("refs.remove", props._id)
          }
          sx={{
            variant: "iconButton.white",
            color: "negative",
            position: "absolute",
            right: 3,
          }}
          children={<UilTrash />}
        />
      )}
      <Flex sx={{ variant: "flex.ref" }}>
        {props.rank}: {props._id}
      </Flex>
    </Flex>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  rank: PropTypes.number,
};

export default Ref;
