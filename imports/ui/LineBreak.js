import { Flex } from "theme-ui";
import InlineInput from "./InlineInput";
import React from "react";

const LineBreak = (props) => (
  <Flex sx={{ flexBasis: "100%", mb: 3, pt: props.isLast ? 3 : 0 }}>
    {props.isLast && <InlineInput />}
  </Flex>
);

export default LineBreak;
