import { Flex, Text } from "theme-ui";
import InlineInput from "./InlineInput";
import React from "react";

export default (props) => (
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
