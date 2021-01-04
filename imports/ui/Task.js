import { Avatar, Flex, Text, Button, Input } from "theme-ui";
import { Check, CornerUpRight, AlertCircle, Trash } from "react-feather";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useContext, useRef, useState } from "react";
import useHover from "@react-hook/hover";

// TODO: Task priority and done toggles broken

const Task = (props) => {
  const { setToastMessage } = useContext(AppContext);
  const [value, setValue] = useState(props.text);

  const target = useRef(null);
  const isHovering = useHover(target);

  console.log(props);

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
            }}
          >
            {props.text}
          </Text>
        )}
      </Flex>
      {isHovering ? (
        <Flex ml="auto">
          <Button
            children={<Trash />}
            sx={{ variant: "button.backgroundNegative", mr: 2 }}
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
          <Button
            children={<AlertCircle />}
            sx={{ variant: "button.background" }}
            title="Toggle priority"
            onClick={() => Meteor.call("tasks.togglePriority", props._id)}
          />
        </Flex>
      ) : (
        props.priority && (
          <Button
            children={<AlertCircle />}
            sx={{ variant: "button.transparent", ml: "auto" }}
            title="Priority"
            onClick={() => Meteor.call("tasks.togglePriority", props._id)}
          />
        )
      )}
      {props.isHovering && (
        <Button
          sx={{
            variant: `button.${props.done ? "primary" : "secondary"}`,
            ml: 2,
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
};

export default Task;
