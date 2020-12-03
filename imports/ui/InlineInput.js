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
    // If we're at the end of the input, blur the input
    39: (event) =>
      event.target.selectionStart === props.text.length &&
      setInputFocused(false),

    // Left
    // If we're at the beginning, select the next ref, and choose it's space
    37: (event) => {
      if (event.target.selectionStart === 1) {
        setSelectedRefId(story[props.index - 1]);
        setInputFocused(false);
        event.target.blur();
      }
    },
  });

  return (
    <Input
      autoFocus
      ref={ref}
      sx={{ variant: "input.inline", width }}
      tabIndex={0}
      {...props}
    />
  );
};

InlineInput.propTypes = {
  index: PropTypes.number,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  focus: PropTypes.bool,
};

export default InlineInput;
