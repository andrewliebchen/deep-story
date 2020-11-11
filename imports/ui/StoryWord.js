import { Flex, IconButton, Input, Text } from "theme-ui";
import { Edit2, Plus, Trash, X } from "react-feather";
import { StoriesCollection } from "../api/stories";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useState } from "react";
import useHover from "@react-hook/hover";

const StoryWord = (props) => {
  const [editing, setEditing] = useState(false);
  const target = React.useRef(null);
  const isHovering = useHover(target, { enterDelay: 100, leaveDelay: 100 });

  return (
    <Flex
      ref={target}
      sx={{
        bg: isHovering && "primaryBackground",
        cursor: "pointer",
        flexShrink: 0,
        ml: -1,
        my: -1,
        p: 1,
        position: "relative",
        userSelect: "none",
      }}
    >
      {isHovering && (
        <Flex
          sx={{
            bg: "text",
            color: "background",
            bottom: "100%",
            left: "50%",
            mb: 1,
            p: 1,
            position: "absolute",
            transform: "translate3d(-50%, 0, 0)",
          }}
        >
          {editing ? (
            <IconButton onClick={() => setEditing(false)}>
              <X />
            </IconButton>
          ) : (
            <Flex>
              <IconButton onClick={() => setEditing(true)}>
                <Edit2 />
              </IconButton>
              <IconButton onClick={() => console.log("Dive!")}>
                <Plus />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.confirm("You sure you want to delete this?") &&
                  StoriesCollection.remove(props._id)
                }
              >
                <Trash />
              </IconButton>
            </Flex>
          )}
        </Flex>
      )}
      {editing ? (
        <Input
          value={props.text}
          onChange={(event) =>
            StoriesCollection.update(props._id, {
              $set: { text: event.target.value },
            })
          }
        />
      ) : (
        <Text>{props.text}</Text>
      )}
      {props.isLast && <InlineInput />}
    </Flex>
  );
};

StoryWord.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
  isLast: PropTypes.bool,
};

export default StoryWord;
