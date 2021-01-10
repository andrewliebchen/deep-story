import { useGetTasks } from "../utils/hooks";
import PropTypes from "prop-types";
import React from "react";
import TasksList from "./TasksList";

const RefTasksView = (props) => {
  const tasks = useGetTasks({ parentId: props._id });

  return <TasksList parentRefId={props._id} tasks={tasks} {...props} />;
};

RefTasksView.propTypes = {
  _id: PropTypes.string,
  showTitle: PropTypes.bool,
};

export default RefTasksView;
