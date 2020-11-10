import { Flex, Text } from "theme-ui";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React from "react";

const StoryWord = (props) => (
  <Flex
    sx={{
      cursor: "pointer",
      flexShrink: 0,
      ml: -1,
      my: -1,
      p: 1,
      "&:hover": { bg: "primaryBackground" },
    }}
  >
    <Text>{props.text}</Text>
    {props.isLast && <InlineInput />}
  </Flex>
);

StoryWord.propTypes = {
  text: PropTypes.string,
  isLast: PropTypes.bool,
};

export default StoryWord;
