import React from "react";
import { Flex, Text } from "theme-ui";

const RefTasksView = (props) => (
  <Flex sx={{ variant: props.isParentRef ? "flex.parent" : "flex.ref" }}>
    <Text>Tasks</Text>
  </Flex>
);

export default RefTasksView;
