import { Flex, IconButton } from "theme-ui";
import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import useHover from "@react-hook/hover";
import PropTypes from "prop-types";

const Ref = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const target = React.useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex
      ref={target}
      sx={{
        variant: "flex.refWrapper",
        bg: props.isSelected && "primaryMuted",
        "&:hover": {
          bg: props.isSelected || "muted",
        },
      }}
    >
      {(props.isSelected || isHovering) && (
        <IconButton
          onClick={props.onRefClick}
          sx={{
            variant: "iconButton.white",
            position: "absolute",
            left: 3,
          }}
          children={props.isSelected ? <UilTimes /> : <UilPen />}
        />
      )}
      <Flex sx={{ variant: "flex.ref" }}>{props._id}</Flex>
    </Flex>
  );
};

Ref.propTypes = {
  _id: PropTypes.string,
  isSelected: PropTypes.bool,
  onRefClick: PropTypes.func,
};

export default Ref;
