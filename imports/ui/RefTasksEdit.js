import React, { useState } from "react";
import { Box, Flex, Text, Input, IconButton } from "theme-ui";
import TitleEdit from "./TitleEdit";
import PropTypes from "prop-types";
import TasksList from "./TasksList";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { useKeycodes } from "@accessible/use-keycode";
import { useGetTasks } from "../utils/hooks";

const RefTasksEdit = (props) => {
  const tasks = useGetTasks({ parentId: props._id });

  return (
    <Box>
      <TitleEdit {...props} />
      <Flex sx={{ variant: "flex.ref", mt: 2 }}>
        <TasksList tasks={tasks} parentRefId={props._id} isEditingRef />
      </Flex>
    </Box>
  );
};

RefTasksEdit.propTypes = {
  _id: PropTypes.string,
};

export default RefTasksEdit;
