import { Flex, Text } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import Highlight from "./Highlight";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";

const WordBlock = (props) => {
  const {
    inputFocused,
    selectedRefId,
    setInputFocused,
    setSelectedRefId,
  } = useContext(AppContext);

  const isSelected = selectedRefId === props._id;
  const isFocused = isSelected && inputFocused;

  const ref = useKeycodes({
    // esc
    // Unselect this ref
    27: () => setSelectedRefId(""),
  });

  return (
    <Flex ref={ref} sx={{ variant: "flex.controlContainer" }}>
      <Flex
        onClick={() => {
          setSelectedRefId(props._id);
          setInputFocused(true);
        }}
        sx={{
          variant: "flex.wordBlockHighlight",
          bg: isSelected && inputFocused && "primaryBackground",
          flexShrink: 0,
        }}
      >
        {isFocused ? (
          <InlineInput value={props.text} isFocused={isFocused} {...props} />
        ) : (
          <Text variant="ref">{props.text}</Text>
        )}
      </Flex>
      <Flex // Becomes space component
        sx={{
          variant: "flex.wordBlockHighlight",
          bg: isSelected && !inputFocused && "primaryBackground",
          height: 24,
          width: "1ch",
        }}
      />
      {isSelected && <Highlight />}
    </Flex>
  );
};

WordBlock.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
};

export default WordBlock;
