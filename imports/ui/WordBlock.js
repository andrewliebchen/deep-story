import { Flex, Text } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import Highlight from "./Highlight";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import WordBlockSpace from "./WordBlockSpace";

const WordBlock = (props) => {
  const {
    inputFocused,
    selectedRefId,
    setInputFocused,
    setSelectedRefId,
  } = useContext(AppContext);

  const isSelected = selectedRefId === props._id;
  const isFocused = isSelected && inputFocused;

  const ref = useKeycodes({
    // esc
    // Unselect this ref
    27: () => setSelectedRefId(""),
  });

  return (
    <Flex ref={ref} sx={{ variant: "flex.controlContainer" }}>
      <Flex
        sx={{
          variant: "flex.wordBlockHighlight",
          bg: isFocused && "primaryBackground",
          flexShrink: 0,
        }}
      >
        {isFocused ? (
          <InlineInput
            defaultValue={props.text}
            focus={isFocused}
            onChange={(event) => {
              // Anything other than a spacebar...
              // If it has and ID, call update. Otherwise, make a new one.
              Meteor.call("refs.update", props._id, {
                text: event.target.value.trim(),
                modifiedAt: Date.now(),
              });

              // If you hit the spacebar, create a new ref, move the contents to the
              // right to the new ref and remove them from the old.
              // Then select the new ref.
            }}
          />
        ) : (
          <Text
            variant="ref"
            onClick={() => {
              setSelectedRefId(props._id);
              setInputFocused(true);
            }}
          >
            {props.text}
          </Text>
        )}
      </Flex>
      {isSelected && !inputFocused ? (
        <WordBlockSpace {...props} />
      ) : (
        <Flex
          sx={{
            variant: "flex.wordBlockHighlight",
            height: 24,
            width: "1ch",
          }}
          onClick={() => {
            setSelectedRefId(props._id);
            setInputFocused(false);
          }}
        />
      )}
      {isSelected && <Highlight />}
    </Flex>
  );
};

WordBlock.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
};

export default WordBlock;
