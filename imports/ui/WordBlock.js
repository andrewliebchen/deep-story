import { Flex, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import Highlight from "./Highlight";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import yallist from "yallist";

const WordBlock = (props) => {
  const { selectedRefId, setSelectedRefId, story } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  const ref = useKeycodes({
    39: (event) =>
      props.text.length === event.target.selectionEnd &&
      setSelectedRefId(story[props.index + 1]),
    37: (event) =>
      event.target.selectionStart === 1 &&
      setSelectedRefId(story[props.index - 1]),
    27: () => setSelectedRefId(""),
  });

  return (
    <Flex ref={ref} sx={{ variant: "flex.controlContainer" }}>
      <Flex
        sx={{
          variant: "flex.wordBlockHighlight",
          bg: isSelected && "primaryBackground",
          flexShrink: 0,
          mx: -1,
          px: 1,
        }}
        onClick={() => setSelectedRefId(props._id)}
      >
        {isSelected ? (
          <InlineInput value={props.text} />
        ) : (
          <Text variant="ref">{props.text}</Text>
        )}
      </Flex>
      <Flex
        sx={{
          variant: "flex.wordBlockHighlight",
          width: "1ch",
          height: 24,
        }}
      />
      {isSelected && <Highlight />}
    </Flex>
  );
};

WordBlock.propTypes = {
  _id: PropTypes.string,
  index: PropTypes.number,
  text: PropTypes.string,
};

export default WordBlock;
