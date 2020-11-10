import { Flex } from "theme-ui";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React from "react";

const StoryBreak = (props) => (
  <Flex sx={{ flexBasis: "100%", mb: 3, pt: props.isLast ? 2 : 0 }}>
    {props.isLast && <InlineInput />}
  </Flex>
);

StoryBreak.propTypes = {
  isLast: PropTypes.bool,
};

export default StoryBreak;
