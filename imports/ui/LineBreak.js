import { Flex } from "theme-ui";
import InlineInput from "./InlineInput";
import React, { useContext } from "react";
import AppContext from "./AppContext";
import Highlight from "./Highlight";
import PropTypes from "prop-types";

/*
- Keyboard controls for ESC
- Only show the Ref types toolbar when you're on a new line or the linebreak.
- For story type, insert words into story
  - Might be a little trick
  - Solution is probably to just to insert a new word AND linebreak right behind
  the current linebreak, and update the selected ID to the new ref, so you have:

  <LB> <-- Currently selected linebreak
  <REF><WORD><SPACE><REF>  <-- Select this one, which was added
  <LB>   <-- And this one
*/

const LineBreak = (props) => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  return (
    <Flex variant="flex.lineBreak" onClick={() => setSelectedRefId(props._id)}>
      {isSelected && <Highlight />}
    </Flex>
  );
};

LineBreak.propTypes = {
  _id: PropTypes.string,
};

export default LineBreak;
