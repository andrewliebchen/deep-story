import { Avatar, Flex, Text, Button, Input } from "theme-ui";
import { Check, CornerUpRight, AlertCircle, Trash } from "react-feather";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import React, { useContext, useRef, useState } from "react";
import useHover from "@react-hook/hover";

// TODO: Task priority and done toggles broken

const allowedMarkdownTypes = [
  "emphasis",
  "inlineCode",
  "link",
  "strong",
  "text",
  "paragraph",
];

const Task = (props) => {
  const { setToastMessage, selectedRefId } = useContext(AppContext);
  const [value, setValue] = useState(props.text);

  const target = useRef(null);
  const isHovering = useHover(target);

  return (
    <Flex
      sx={{
        alignItems: "center",
        p: 2,
        mx: -2,
        borderRadius: 20,
        "&:hover": {
          bg: "background",
        },
      }}
      ref={target}
    >
      {props.hideAvatars || (
        <Avatar
          src={props.assignedTo.services.google.picture}
          title={`Assigned to ${props.assignedTo.profile.name}`}
        />
      )}
      <Flex sx={{ mx: 3, flexGrow: 2 }}>
        {props.isSelected ? (
          <Input
            autoFocus
            sx={{ variant: "forms.inputGhosted", textAlign: "left" }}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyPress={(event) =>
              event.key === ("Enter" || "Escape") &&
              props.setSelectedTaskId(false)
            }
          />
        ) : (
          <Text
            onClick={() => {
              props.setSelectedTaskId(props._id);
              setToastMessage("Press esc or enter when you're done");
            }}
            title="Click to edit"
            sx={{
              variant: "text.default",
              color: props.done && "textSecondary",
              textDecoration: props.done && "line-through",
              userSelect: "none",
              cursor: "pointer",
              flexGrow: 2,
              "& > p": {
                m: 0,
              },
            }}
          >
            {props.text}
          </Text>
        )}
      </Flex>
      {props.parentId === selectedRefId && (
        <Flex sx={{ ml: "auto" }}>
          <Button
            children={<Trash />}
            sx={{ variant: "button.negative", mr: 2 }}
            title="Delete task"
            onClick={() =>
              Meteor.call("tasks.remove", props._id, (error, success) =>
                setToastMessage("Task deleted")
              )
            }
          />
          {props.showLinks && props.parentId && (
            <Link to={`/refs/${props.parentId}`}>
              <Button
                children={<CornerUpRight />}
                sx={{ variant: "button.secondary", mr: 2 }}
                title="Go to parent ref"
              />
            </Link>
          )}
        </Flex>
      )}
      {(props.isHovering || props.parentId === selectedRefId) && (
        <Button
          sx={{
            variant: `button.${props.done ? "primary" : "secondary"}`,
            color: "background",
          }}
          children={<Check />}
          disabled={props.isEditingRef}
          onClick={() => Meteor.call("tasks.toggle", props._id)}
        />
      )}
    </Flex>
  );
};

Task.propTypes = {
  setSelectedTaskId: PropTypes.func,
  selectedTaskId: PropTypes.string,
  parentRefisSelected: PropTypes.bool,
};

export default Task;
