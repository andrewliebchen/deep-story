import { Flex } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Meteor } from "meteor/meteor";

const WordBlockSpace = (props) => {
  const {
    userId,
    parentId,
    setInputFocused,
    story,
    setSelectedRefId,
  } = useContext(AppContext);
  const [value, setValue] = useState("");
  const { refId } = useParams();

  const ref = useKeycodes({
    // 🪐bar, my friend.
    32: (event) =>
      Meteor.call(
        "refs.insert",
        {
          createdAt: Date.now(),
          createdBy: userId,
          parentId: refId,
          type: "text",
          text: value,
        },
        true,
        props.index + 1,
        (err, id) => {
          setSelectedRefId(id);
          setInputFocused(false);
        }
      ),
  });

  const styles = {
    variant: "flex.wordBlockHighlight",
    height: 24,
    minWidth: "1ch",
  };

  return (
    <Flex
      ref={ref}
      sx={{ ...styles, bg: "primaryBackground" }}
      onClick={() => setInputFocused(true)}
    >
      {value && <Flex sx={styles} />}
      <InlineInput
        defaultValue={value}
        focus
        onChange={(event) => setValue(event.target.value)}
        leftKeyPress={() => setInputFocused(true)}
        rightKeyPress={(event) => {
          if (event.target.selectionStart === event.target.value.length) {
            setSelectedRefId(story[props.index + 1]);
            setInputFocused(true);
          }
        }}
      />
      {value && <Flex sx={styles} />}
    </Flex>
  );
};

WordBlockSpace.propTypes = {
  isFocused: PropTypes.bool,
  index: PropTypes.number,
};

export default WordBlockSpace;
