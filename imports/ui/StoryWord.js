import { X } from "react-feather";
import { Flex, IconButton, Input, Text } from "theme-ui";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useState } from "react";

const StoryWord = (props) => (
  <Flex>
    <Flex
      sx={{
        bg: props.isSelected && "primaryBackground",
        cursor: "pointer",
        flexShrink: 0,
        position: "relative",
        userSelect: "none",
        "&:hover": {
          bg: "primaryBackground",
        },
      }}
      onClick={() => props.setSelectedId(props.isSelected ? "" : props._id)}
    >
      <Text variant="story">{props.text}</Text>
    </Flex>
    <Text variant="story"> </Text>
    {props.isLast && <InlineInput {...props} />}
  </Flex>
);

StoryWord.propTypes = {
  _id: PropTypes.string,
  isLast: PropTypes.bool,
  isSelected: PropTypes.bool,
  setEditing: PropTypes.func,
  setSelectedId: PropTypes.func,
  text: PropTypes.string,
};

export default StoryWord;
