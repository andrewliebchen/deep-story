import React, { useContext } from "react";
import { Flex } from "theme-ui";
import PropTypes from "prop-types";
import { useKeycodes } from "@accessible/use-keycode";
import InlineInput from "./InlineInput";
import AppContext from "./AppContext";

const WordBlockSpace = (props) => {
  const { setInputFocused } = useContext(AppContext);
  const ref = useKeycodes({
    // Right
    // Go to the next ref
    39: (event) =>
      event.target.selectionStart === props.text.length &&
      setInputFocused(false),

    // Left
    // Go to the previous ref
    37: (event) => {
      if (event.target.selectionStart === 1) {
        setSelectedRefId(story[props.index - 1]);
        setInputFocused(false);
        event.target.blur();
      }
    },
  });

  return (
    <Flex
      sx={{
        variant: "flex.wordBlockHighlight",
        bg: "primaryBackground",
        height: 24,
        width: "1ch",
      }}
      onClick={() => setInputFocused(true)}
    >
      <InlineInput index={props.index} isFocused />
    </Flex>
  );
};

WordBlockSpace.propTypes = {
  isFocused: PropTypes.bool,
};

export default WordBlockSpace;
