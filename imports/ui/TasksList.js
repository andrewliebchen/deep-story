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
import UilCornerUpRight from "@iconscout/react-unicons/icons/uil-corner-up-right";
import useHover from "@react-hook/hover";
import { useHistory, useParams } from "react-router-dom";
import { useKeycodes } from "@accessible/use-keycode";
import UilPlusCircle from "@iconscout/react-unicons/icons/uil-plus-circle";

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
  showLinks: PropTypes.bool,
  parentRefId: PropTypes.string,
};

export default TasksList;
