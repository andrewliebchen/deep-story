import { Avatar, Card, Flex, Input, Progress, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useAccount } from "../utils/hooks";
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import Task from "./Task";
import AppContext from "./AppContext";

const TasksList = (props) => {
  const [value, setValue] = useState("");
  const { user } = useAccount();

  const totalTasks = props.tasks.length;

  return (
    <Flex sx={{ flexGrow: 2, flexDirection: "column" }}>
      <Flex sx={{ my: -2, flexDirection: "column" }}>
        {totalTasks > 0 &&
          props.tasks.map((task) => (
            <Task
              key={task._id}
              isHoveringRef={props.isHovering}
              isEditingRef={props.isEditingRef}
              {...task}
            />
          ))}
      </Flex>

      <Flex sx={{ alignItems: "center", mt: 3 }}>
        {user &&
          (props.hideAvatars || (
            <Avatar src={user.services.google.picture} sx={{ mr: 2 }} />
          ))}
        <Input
          placeholder="Add a task and press enter..."
          sx={{
            textAlign: "left",
            bg: props.isHovering || props.isEditingRef ? "muted" : "background",
          }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" &&
            value &&
            Meteor.call(
              "tasks.insert",
              props.parentRefId || null,
              value,
              (error, success) => success && setValue("")
            )
          }
        />
      </Flex>
    </Flex>
  );
};

TasksList.propTypes = {
  isEditingRef: PropTypes.bool,
  parentRefId: PropTypes.string,
  hideAvatars: PropTypes.bool,
  isHovering: PropTypes.bool,
};

export default TasksList;
