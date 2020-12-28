import { Flex, Text } from "theme-ui";
import React from "react";
import TitleView from "./TitleView";

const RefTasksView = (props) => (
  <Flex sx={{ variant: props.isParentRef ? "flex.parent" : "flex.ref" }}>
    <TitleView {...props} />
    <Text>Tasks</Text>
  </Flex>
);

export default RefTasksView;
