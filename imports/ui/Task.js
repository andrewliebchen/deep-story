import { Avatar, Flex, Text, IconButton, Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useHistory } from "react-router-dom";
import {
  UilExclamationCircle,
  UilTrash,
  UilPen,
  UilCornerUpRight,
  UilCircle,
  UilCheck,
} from "@iconscout/react-unicons";
import {
  UisCheckCircle,
  UisExclamationCircle,
} from "@iconscout/react-unicons-solid/";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef, useState } from "react";
import useHover from "@react-hook/hover";

const Task = (props) => {
  const { setToastMessage, selectedRefId } = useContext(AppContext);
  const [value, setValue] = useState(props.text);
  const history = useHistory();

  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex
      sx={{
        alignItems: "center",
        pr: 2,
      }}
      ref={target}
    >
      <IconButton
        sx={{ variant: "button.transparent", mr: 1 }}
        children={props.done ? <UisCheckCircle /> : <UilCircle />}
        disabled={props.isEditingRef}
        onClick={() => Meteor.call("tasks.toggle", props._id)}
      />
      {props.hideAvatars || (
        <Avatar
          src={props.assignedTo.services.google.picture}
          sx={{ size: 24, mr: 2 }}
          title={`Assigned to ${props.assignedTo.profile.name}`}
        />
      )}
      {props.isSelected ? (
        <Input
          autoFocus
          sx={{ variant: "input.inline", textAlign: "left" }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      ) : (
        <Text
          onClick={() => props.setSelectedTaskId(props._id)}
          title="Click to edit"
          sx={{
            variant: "text.default",
            color: props.done && "textSecondary",
            textDecoration: props.done && "line-through",
            userSelect: "none",
            cursor: "pointer",
          }}
        >
          {props.text}
        </Text>
      )}
      {props.isSelected ? (
        <Flex ml="auto">
          <IconButton
            children={<UilTrash />}
            sx={{ variant: "button.negative", mr: 2 }}
            title="Delete task"
            onClick={() =>
              Meteor.call("tasks.remove", props._id, (error, success) =>
                setToastMessage("Task deleted")
              )
            }
          />
          <IconButton
            children={<UilCheck />}
            sx={{ variant: "button.positive" }}
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
      ) : isHovering ? (
        <Flex ml="auto">
          {props.showLinks && props.parentId && (
            <IconButton
              children={<UilCornerUpRight />}
              sx={{ variant: "button.secondary", mr: 2 }}
              onClick={() => history.push(`/refs/${props.parentId}`)}
              title="Go to parent ref"
            />
          )}
          <IconButton
            children={
              props.priority ? (
                <UisExclamationCircle />
              ) : (
                <UilExclamationCircle />
              )
            }
            sx={{ variant: "button.secondary" }}
            title="Priority"
            onClick={() => Meteor.call("tasks.togglePriority", props._id)}
          />
        </Flex>
      ) : (
        props.priority && (
          <IconButton
            children={<UisExclamationCircle />}
            sx={{ variant: "button.transparent", ml: "auto" }}
            title="Priority"
            onClick={() => Meteor.call("tasks.togglePriority", props._id)}
          />
        )
      )}
    </Flex>
  );
};

export default Task;
