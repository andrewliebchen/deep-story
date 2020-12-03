import { Input, Flex } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { useKeycodes } from "@accessible/use-keycode";

const InlineInput = (props) => {
  const { inputFocused, setInputFocused, setSelectedRefId, story } = useContext(
    AppContext
  );
  const [width, setWidth] = useState(`${props.text.length}ch`);

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
        console.log(props.index);
        setSelectedRefId(story[props.index - 1]);
        setInputFocused(false);
        event.target.blur();
      }
    },
  });

  return (
    <Input
      autoFocus
      defaultValue={props.text}
      focus={props.isFocused}
      onChange={(event) => {
        setWidth(`${props.text.length}ch`);

        // Anything other than a spacebar...
        Meteor.call("refs.update", props._id, {
          text: event.target.value,
          modifiedAt: Date.now(),
        });

        // If you hit the spacebar, create a new ref, move the contents to the
        // right to the new ref and remove them from the old.
        // Then select the new ref.
      }}
      ref={ref}
      sx={{ variant: "input.inline", width }}
      tabIndex={0}
    />
  );
};

InlineInput.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
  isFocused: PropTypes.bool,
  setInputFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  index: PropTypes.number,
};

export default InlineInput;
