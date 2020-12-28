import React, { useContext, useRef } from "react";
import { Flex, Text, IconButton } from "theme-ui";
import { useGetTasks } from "../utils/hooks";
import UisCheckCircle from "@iconscout/react-unicons-solid/icons/uis-check-circle";
import UilCircle from "@iconscout/react-unicons/icons/uil-circle";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import PropTypes from "prop-types";
import useHover from "@react-hook/hover";
import AppContext from "./AppContext";

const Task = (props) => {
  const { setToastMessage } = useContext(AppContext);

  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex
      sx={{
        alignItems: "center",
        ml: -1,
      }}
      ref={target}
    >
      <IconButton
        sx={{ variant: "iconButton.transparent", mr: 1 }}
        children={props.done ? <UisCheckCircle /> : <UilCircle />}
        onClick={() => Meteor.call("tasks.toggle", props._id)}
      />
      <Text
        sx={{
          variant: "text.default",
          color: props.done && "textSecondary",
          textDecoration: props.done && "line-through",
        }}
      >
        {props.text}
      </Text>
      {props.canDelete && isHovering && (
        <IconButton
          children={<UilTrash />}
          sx={{ variant: "iconButton.negative", ml: "auto" }}
          title="Delete task"
          onClick={() =>
            Meteor.call("tasks.remove", props._id, (error, success) =>
              setToastMessage("Task deleted")
            )
          }
        />
      )}
    </Flex>
  );
};

const TasksList = (props) => {
  const tasks = useGetTasks(props.parentId);

  return (
    <>
      {tasks && tasks.length > 0 && (
        <Flex sx={{ flexDirection: "column", mb: -2 }}>
          {tasks.map((task) => (
            <Task key={task._id} {...task} {...props} />
          ))}
        </Flex>
      )}
    </>
  );
};

TasksList.propTypes = {
  parentId: PropTypes.string,
  canDelete: PropTypes.bool,
};

export default TasksList;
