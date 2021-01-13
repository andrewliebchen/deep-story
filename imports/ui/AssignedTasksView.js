import { Flex } from "theme-ui";
import { useGetTasks, useAccount } from "../utils/hooks";
import Container from "./Container";
import React from "react";
import TasksList from "./TasksList";

const AssignedTasksView = () => {
  const { userId } = useAccount();
  const tasks = useGetTasks({ assignedTo: userId });

  return (
    <Container>
      <Flex sx={{ variant: "flex.ref" }}>
        <TasksList tasks={tasks} showLinks hideAvatars />
      </Flex>
    </Container>
  );
};

export default AssignedTasksView;
