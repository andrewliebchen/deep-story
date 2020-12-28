import { Flex, Text, IconButton, Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useHistory } from "react-router-dom";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef, useState } from "react";
import UilCheck from "@iconscout/react-unicons/icons/uil-check";
import UilCircle from "@iconscout/react-unicons/icons/uil-circle";
import UilCornerUpRight from "@iconscout/react-unicons/icons/uil-corner-up-right";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";
import UisCheckCircle from "@iconscout/react-unicons-solid/icons/uis-check-circle";
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
        sx={{ variant: "iconButton.transparent", mr: 1 }}
        children={props.done ? <UisCheckCircle /> : <UilCircle />}
        disabled={props.isEditingRef}
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
          <Flex ml="auto">
            {props.showLinks && props.parentId && (
              <IconButton
                children={<UilCornerUpRight />}
                sx={{ variant: "iconButton.default", mr: 2 }}
                onClick={() => history.push(`/refs/${props.parentId}`)}
                title="Go to parent ref"
              />
            )}
            <IconButton
              children={<UilPen />}
              sx={{ variant: "iconButton.default", ml: "auto" }}
              onClick={() => props.setSelectedTaskId(props._id)}
              title="Edit task"
            />
          </Flex>
        )
      )}
    </Flex>
  );
};

export default Task;
