import { Flex, Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useKeycodes } from "@accessible/use-keycode";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Task from "./Task";
import UilPlusCircle from "@iconscout/react-unicons/icons/uil-plus-circle";

const TasksList = (props) => {
  const [selectedTaskId, setSelectedTaskId] = useState(false);
  const [value, setValue] = useState("");

  // Listen for keycodesListener
  const keycodesListener = useKeycodes({
    // esc
    27: () => setSelectedTaskId(false),

    // enter
    13: () => {
      Meteor.call(
        "tasks.insert",
        props.parentRefId || null,
        value,
        (error, success) => success && setValue("")
      );
    },
  });

  return (
    <Flex
      sx={{
        flexDirection: "column",
        m: -2,
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Flex
          sx={{
            color: "primary",
            mr: 1,
            size: "control",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UilPlusCircle />
        </Flex>
        <Input
          ref={keycodesListener}
          autoFocus={props.isEditingRef}
          placeholder="Add task and press enter"
          sx={{
            variant: "input.inline",
            fontFamily: "default",
            textAlign: "left",
          }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Flex>
      {props.tasks &&
        props.tasks.length > 0 &&
        props.tasks.map((task) => (
          <Task
            key={task._id}
            isSelected={selectedTaskId === task._id}
            setSelectedTaskId={setSelectedTaskId}
            {...task}
            {...props}
          />
        ))}
    </Flex>
  );
};

TasksList.propTypes = {
  isEditingRef: PropTypes.bool,
  parentRefId: PropTypes.string,
};

export default TasksList;
