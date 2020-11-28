import { Flex, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useKeycodes } from "@accessible/use-keycode";
import yallist from "yallist";

const Word = (props) => {
  const { selectedRefId, setSelectedRefId, story } = useContext(AppContext);
  const isSelected = selectedRefId === props._id;

  const ref = useKeycodes({
    39: (event) =>
      props.text.length === event.target.selectionEnd &&
      setSelectedRefId(story[props.index + 1]),
    37: (event) =>
      event.target.selectionStart === 1 &&
      setSelectedRefId(story[props.index - 1]),
    27: () => setSelectedRefId(""),
  });

  return (
    <Flex ref={ref}>
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
        onClick={() => setSelectedRefId(props._id)}
      >
        {isSelected ? (
          <InlineInput value={props.text} />
        ) : (
          <Text variant="ref">{props.text}</Text>
        )}
      </Flex>
      <Text variant="ref"> </Text>
    </Flex>
  );
};

Word.propTypes = {
  _id: PropTypes.string,
  index: PropTypes.number,
  text: PropTypes.string,
};

export default Word;
