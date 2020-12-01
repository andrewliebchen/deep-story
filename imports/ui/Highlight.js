import React from "react";
import { Flex } from "theme-ui";

const Highlight = () => (
  <Flex
    sx={{
      position: "fixed",
      width: "100vw",
      p: 2,
      left: 0,
      justifyContent: "stretch",
    }}
  >
    <Flex variant="flex.highlight" />
  </Flex>
);

export default Highlight;
