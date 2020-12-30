import { Avatar, Card, Flex, Input, Progress, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useAccount } from "../utils/hooks";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Task from "./Task";

const TasksList = (props) => {
  const [selectedTaskId, setSelectedTaskId] = useState(false);
  const [value, setValue] = useState("");
  const { user } = useAccount();

  const totalTasks = props.tasks.length;

  return (
    <Card sx={{ flexDirection: "column" }}>
      <Flex sx={{ alignItems: "center" }}>
        {user &&
          (props.hideAvatars || (
            <Avatar src={user.services.google.picture} sx={{ mr: 2 }} />
          ))}
        <Input
          autoFocus={props.isEditingRef}
          placeholder="Add a task and press enter..."
          sx={{ fontFamily: "body" }}
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
      {totalTasks > 0 && (
        <Flex sx={{ mt: 3, flexDirection: "column" }}>
          <Progress
            max={totalTasks}
            value={props.tasks.filter((task) => task.done).length}
            sx={{ mb: 2 }}
          />
          {props.tasks.map((task) => (
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
    </Card>
  );
};

TasksList.propTypes = {
  isEditingRef: PropTypes.bool,
  parentRefId: PropTypes.string,
  hideAvatars: PropTypes.bool,
};

export default TasksList;
