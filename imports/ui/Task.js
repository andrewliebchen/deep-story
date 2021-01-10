import { Avatar, Flex, Text, Button, Input } from "theme-ui";
import { Check, CornerUpRight, X } from "react-feather";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef, useState, useEffect } from "react";
import useHover from "@react-hook/hover";

const allowedMarkdownTypes = [
  "emphasis",
  "inlineCode",
  "link",
  "strong",
  "text",
  "paragraph",
];

const ViewCheckBox = (props) => {
  const { stopEditMode, setStopEditMode } = useContext(AppContext);

  const target = useRef(null);
  const isHovering = useHover(target);

  useEffect(() => setStopEditMode(isHovering || stopEditMode));

  return (
    <Button
      ref={target}
      sx={{
        variant: `button.${props.done ? "primary" : "secondary"}`,
        color: props.done || "background",
      }}
      children={<Check />}
      disabled={props.isEditingRef}
      onClick={(event) => Meteor.call("tasks.toggle", props._id)}
    />
  );
};

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
      {props.isEditingRef && (
        <Flex sx={{ ml: 2 }}>
          <Button
            children={<X />}
            sx={{ variant: "button.backgroundNegative", mr: 2 }}
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
      {props.isHoveringRef && <ViewCheckBox {...props} />}
      {props.isEditingRef && (
        <Flex>
          <Button
            sx={{
              variant: `button.${props.done ? "primary" : "secondary"}`,
              color: props.done || "background",
            }}
            children={<Check />}
            onClick={() => Meteor.call("tasks.toggle", props._id)}
          />
        </Flex>
      )}
    </Flex>
  );
};

Task.propTypes = {
  isEditingRef: PropTypes.bool,
  isHoveringRef: PropTypes.bool,
  showLinks: PropTypes.bool,
  isAutoFocused: PropTypes.bool,
};

export default Task;
