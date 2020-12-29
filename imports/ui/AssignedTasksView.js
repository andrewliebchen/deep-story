import React, { useEffect } from "react";
import { Flex, Heading, IconButton, Text, useColorMode } from "theme-ui";
import { useGetTasks, useAccount } from "../utils/hooks";
import TasksList from "./TasksList";

const AssignedTasksView = () => {
  const { userId } = useAccount();
  const tasks = useGetTasks({ assignedTo: userId });

  const [colorMode, setColorMode] = useColorMode();
  useEffect(() => setColorMode("tasks"));

  return (
    <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
      <Flex sx={{ variant: "flex.ref" }}>
        <TasksList tasks={tasks} showLinks hideAvatars />
      </Flex>
    </Flex>
  );
};

export default AssignedTasksView;
