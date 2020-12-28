import React from "react";
import { Flex, Text, IconButton } from "theme-ui";
import { useGetTasks } from "../utils/hooks";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import UilCircle from "@iconscout/react-unicons/icons/uil-circle";
import PropTypes from "prop-types";

const TasksList = (props) => {
  const tasks = useGetTasks(props.parentId);

  return (
    <>
      {tasks && tasks.length > 0 && (
        <Flex sx={{ mt: 2, flexDirection: "column", mb: -2 }}>
          {tasks.map((task) => (
            <Flex key={task._id} sx={{ alignItems: "center", ml: -2 }}>
              <IconButton
                sx={{ variant: "iconButton.transparent", mr: 1 }}
                children={task.done ? <UilCheckCircle /> : <UilCircle />}
                onClick={() => Meteor.call("tasks.toggle", task._id)}
              />
              <Text
                sx={{
                  variant: "text.default",
                  color: task.done && "textSecondary",
                  textDecoration: task.done && "line-through",
                }}
              >
                {task.text}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
};

TasksList.propTypes = {
  parentId: PropTypes.string,
};

export default TasksList;
