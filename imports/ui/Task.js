import { Avatar, Flex, Text, Button, Input } from "theme-ui";
import { Check, CornerUpRight, AlertCircle, Trash } from "react-feather";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import React, { useContext, useRef, useState } from "react";
import useHover from "@react-hook/hover";
import { useParams } from "react-router-dom";

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
  const [autoFocus, setAutoFocus] = useState(false);

  return (
    <Flex
      sx={{
        alignItems: "center",
        p: 2,
        mx: -2,
        borderRadius: 20,
      }}
    >
      {props.hideAvatars || (
        <Avatar
          src={props.assignedTo.services.google.picture}
          title={`Assigned to ${props.assignedTo.profile.name}`}
          mr={3}
        />
      )}

      {props.isEditingRef ? (
        <Input
          autoFocus={autoFocus}
          sx={{
            variant: "forms.inputGhosted",
            textAlign: "left",
            textDecoration: props.done && "line-through",
          }}
          defaultValue={props.text}
          disabled={props.done}
          onChange={(event) =>
            Meteor.call("tasks.update", props._id, event.target.value)
          }
        />
      ) : (
        <Text
          title="Click to edit"
          sx={{
            variant: "text.default",
            color: props.done && "textSecondary",
            textDecoration: props.done && "line-through",
            userSelect: "none",
            flexGrow: 2,
            "& > p": {
              m: 0,
            },
          }}
        >
          {props.text}
        </Text>
      )}
      {props.isParentRefSelected && (
        <Flex sx={{ ml: 2 }}>
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
          {props.showLinks && (
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
      {(props.isParentRefHovering || props.isParentRefSelected) && (
        <Button
          sx={{
            variant: "button.background",
            bg: "transparent",
            color: props.done ? "primary" : "muted",
            "&:hover": { bg: "primaryBackground", color: "primary" },
          }}
          children={<Check />}
          disabled={props.isEditingRef}
          onClick={(event) => {
            // TODO: Fix this
            Meteor.call("tasks.toggle", props._id);
          }}
        />
      )}
    </Flex>
  );
};

Task.propTypes = {
  isEditingRef: PropTypes.bool,
  isParentRefHovering: PropTypes.bool,
  showLinks: PropTypes.bool,
  isAutoFocused: PropTypes.bool,
};

export default Task;
