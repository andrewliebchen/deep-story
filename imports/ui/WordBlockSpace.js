import { Flex } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext } from "react";

// function moveCaretToStart(el) {
//     if (typeof el.selectionStart == "number") {
//         el.selectionStart = el.selectionEnd = 0;
//     } else if (typeof el.createTextRange != "undefined") {
//         el.focus();
//         var range = el.createTextRange();
//         range.collapse(true);
//         range.select();
//     }
// }

const WordBlockSpace = (props) => {
  const { setInputFocused, story, setSelectedRefId } = useContext(AppContext);
  const ref = useKeycodes({
    // Right
    // Go to the next ref
    39: (event) => {
      setSelectedRefId(story[props.index + 1]);
      setInputFocused(true);
    },

    // Left
    // Set input as focused
    37: () => setInputFocused(true),
  });

  return (
    <Flex
      ref={ref}
      sx={{
        variant: "flex.wordBlockHighlight",
        bg: "primaryBackground",
        height: 24,
        width: "1ch",
      }}
      onClick={() => setInputFocused(true)}
    >
      <InlineInput index={props.index} text=" " isFocused />
    </Flex>
  );
};

WordBlockSpace.propTypes = {
  isFocused: PropTypes.bool,
};

export default WordBlockSpace;
