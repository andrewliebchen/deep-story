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
      <InlineInput
        defaultValue=" "
        focus
        onChange={(event) => console.log("This will change things")}
        leftKeyPress={() => setInputFocused(true)}
        rightKeyPress={(event) => {
          if (event.target.selectionStart === event.target.value.length) {
            setSelectedRefId(story[props.index + 1]);
            setInputFocused(false);
          }
        }}
      />
    </Flex>
  );
};

WordBlockSpace.propTypes = {
  isFocused: PropTypes.bool,
};

export default WordBlockSpace;
