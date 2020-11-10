import React from "react";
import { Flex } from "theme-ui";
import InlineInput from "./InlineInput";

export default (props) => (
  <Flex sx={{ flexBasis: "100%", mb: 3, pt: props.isLast ? 2 : 0 }}>
    {props.isLast && <InlineInput />}
  </Flex>
);
