import { X } from "react-feather";
import { Flex, IconButton, Input, Text } from "theme-ui";
import { StoriesCollection } from "../api/stories";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useState } from "react";

const StoryWord = (props) => {
  const isSelected = props.selectedId === props._id;
  return (
    <Flex>
      <Flex
        sx={{
          bg: isSelected && "primaryBackground",
          cursor: "pointer",
          flexShrink: 0,
          position: "relative",
          userSelect: "none",
          "&:hover": {
            bg: "primaryBackground",
          },
        }}
        onClick={() => props.setSelectedId(isSelected ? "" : props._id)}
      >
        {isSelected && props.editing ? (
          <Flex>
            {/* This could move up too! */}
            <Input
              value={props.text}
              onChange={(event) =>
                StoriesCollection.update(props._id, {
                  $set: { text: event.target.value },
                })
              }
            />
            <IconButton onClick={() => props.setEditing(false)}>
              <X />
            </IconButton>
          </Flex>
        ) : (
          <Text variant="story">{props.text}</Text>
        )}
      </Flex>
      <Text variant="story"> </Text>
      {props.isLast && <InlineInput {...props} />}
    </Flex>
  );
};

StoryWord.propTypes = {
  _id: PropTypes.string,
  currentUser: PropTypes.string,
  editing: PropTypes.bool,
  isLast: PropTypes.bool,
  selectedId: PropTypes.string,
  setEditing: PropTypes.func,
  setSelectedId: PropTypes.func,
  text: PropTypes.string,
};

export default StoryWord;
