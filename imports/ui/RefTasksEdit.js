import { Flex } from "theme-ui";
import { useGetTasks } from "../utils/hooks";
import PropTypes from "prop-types";
import React from "react";
import TasksList from "./TasksList";

const RefTasksEdit = (props) => {
  const tasks = useGetTasks({ parentId: props._id });

  return (
    <Flex sx={{ variant: "flex.ref", mt: 2 }}>
      <TasksList tasks={tasks} parentRefId={props._id} isEditingRef />
    </Flex>
  );
};

RefTasksEdit.propTypes = {
  _id: PropTypes.string,
};

export default RefTasksEdit;
