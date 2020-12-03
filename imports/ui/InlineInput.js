import { Input, Flex } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useKeycodes } from "@accessible/use-keycode";

const InlineInput = (props) => {
  const { setInputFocused, setSelectedRefId, story } = useContext(AppContext);
  const [width, setWidth] = useState(1);

  useEffect(() => {
    setWidth(`${props.defaultValue.length}ch`);
  });

  const ref = useKeycodes({
    // Right
    39: (event) => props.rightKeyPress(event),

    // Left
    37: (event) => props.leftKeyPress(event),
  });

  return (
    <Input
      autoFocus
      ref={ref}
      sx={{ variant: "input.inline", width }}
      tabIndex={0}
      onChange={(event) => console.log("This changes things")}
      {...props}
    />
  );
};

InlineInput.propTypes = {
  defaultValue: PropTypes.string,
  focus: PropTypes.bool,
  index: PropTypes.number,
  leftKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  rightKeyPress: PropTypes.func,
};

export default InlineInput;
