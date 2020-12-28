import { Flex, Text, IconButton, Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useGetTasks } from "../utils/hooks";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef, useState } from "react";
import UilCheck from "@iconscout/react-unicons/icons/uil-check";
import UilCircle from "@iconscout/react-unicons/icons/uil-circle";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import UisCheckCircle from "@iconscout/react-unicons-solid/icons/uis-check-circle";
import useHover from "@react-hook/hover";

const Task = (props) => {
  const { setToastMessage, selectedRefId } = useContext(AppContext);
  const [value, setValue] = useState(props.text);

  const target = useRef(null);
  const isHovering = useHover(target);

  const isEditingRef = props.parentId === selectedRefId;

  return (
    <Flex
      sx={{
        alignItems: "center",
        ml: -1,
        mt: 1,
      }}
      ref={target}
    >
      <IconButton
        sx={{ variant: "iconButton.transparent", mr: 1 }}
        children={props.done ? <UisCheckCircle /> : <UilCircle />}
        disabled={isEditingRef}
        onClick={() => Meteor.call("tasks.toggle", props._id)}
      />
      {props.isSelected ? (
        <Input
          autoFocus
          sx={{ variant: "input.inline", textAlign: "left" }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      ) : (
        <Text
          sx={{
            variant: "text.default",
            color: props.done && "textSecondary",
            textDecoration: props.done && "line-through",
          }}
        >
          {props.text}
        </Text>
      )}
      {props.isSelected ? (
        <Flex ml="auto">
          <IconButton
            children={<UilTrash />}
            sx={{ variant: "iconButton.negative", mr: 2 }}
            title="Delete task"
            onClick={() =>
              Meteor.call("tasks.remove", props._id, (error, success) =>
                setToastMessage("Task deleted")
              )
            }
          />
          <IconButton
            children={<UilCheck />}
            sx={{ variant: "iconButton.positive" }}
            onClick={() =>
              Meteor.call(
                "tasks.update",
                props._id,
                value,
                (error, success) => {
                  props.setSelectedTaskId(false);
                  setToastMessage("Task updated");
                }
              )
            }
          />
        </Flex>
      ) : (
        isHovering && (
          <IconButton
            children={<UilPen />}
            sx={{ variant: "iconButton.default", ml: "auto" }}
            onClick={() => props.setSelectedTaskId(props._id)}
            title="Edit task"
          />
        )
      )}
    </Flex>
  );
};

const TasksList = (props) => {
  const [selectedTaskId, setSelectedTaskId] = useState(false);
  const tasks = useGetTasks(props.parentId);

  return (
    <>
      {tasks && tasks.length > 0 && (
        <Flex sx={{ flexDirection: "column", mb: -2 }}>
          {tasks.map((task) => (
            <Task
              key={task._id}
              isSelected={selectedTaskId === task._id}
              setSelectedTaskId={setSelectedTaskId}
              {...task}
              {...props}
            />
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
