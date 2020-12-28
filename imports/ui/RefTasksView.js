import { Flex, Text } from "theme-ui";
import React from "react";
import TitleView from "./TitleView";
import TasksList from "./TasksList";

const RefTasksView = (props) => (
  <Flex sx={{ variant: props.isParentRef ? "flex.parent" : "flex.ref" }}>
    <TitleView {...props} />
    <TasksList parentId={props._id} />
  </Flex>
);

export default RefTasksView;
