import React, { useEffect } from "react";
import { Flex, Heading, IconButton, Text, useColorMode } from "theme-ui";
import { useGetTasks, useAccount } from "../utils/hooks";
import TasksList from "./TasksList";

const TasksRefsView = () => {
  const { userId } = useAccount();
  const tasks = useGetTasks({ assignedTo: userId });

  const [colorMode, setColorMode] = useColorMode();
  useEffect(() => setColorMode("tasks"));

  return (
    <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
      <Flex
        sx={{
          width: "ref",
          px: 3,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading mb={0}>Your Tasks</Heading>
      </Flex>
      <Flex sx={{ variant: "flex.ref" }}>
        <TasksList tasks={tasks} showLinks />
      </Flex>
    </Flex>
  );
};

export default TasksRefsView;
