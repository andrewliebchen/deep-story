import React, { useState } from "react";
import { Box, Flex, Text, Input, IconButton } from "theme-ui";
import PropTypes from "prop-types";
import TasksList from "./TasksList";
import { useKeycodes } from "@accessible/use-keycode";
import { useGetTasks } from "../utils/hooks";

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
