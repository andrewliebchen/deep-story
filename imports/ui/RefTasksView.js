import { Flex, Text } from "theme-ui";
import React from "react";
import TasksList from "./TasksList";
import { useGetTasks } from "../utils/hooks";
import PropTypes from "prop-types";

const RefTasksView = (props) => {
  const tasks = useGetTasks({ parentId: props._id });

  return (
    <Flex sx={{ variant: props.isParentRef ? "flex.parent" : "flex.ref" }}>
      <TasksList parentRefId={props._id} tasks={tasks} />
    </Flex>
  );
};

RefTasksView.propTypes = {
  _id: PropTypes.string,
  showTitle: PropTypes.bool,
};

export default RefTasksView;
