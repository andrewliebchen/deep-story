import { Flex } from "theme-ui";
import React from "react";

const Highlight = () => (
  <Flex
    sx={{
      position: "fixed",
      width: "100vw",
      px: 2,
      left: 0,
      justifyContent: "stretch",
    }}
  >
    <Flex variant="flex.highlight" />
  </Flex>
);

export default Highlight;
