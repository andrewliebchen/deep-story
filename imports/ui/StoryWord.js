import { Flex, IconButton, Text } from "theme-ui";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React from "react";
import useHover from "@react-hook/hover";
import { Edit2, Plus } from "react-feather";

const StoryWord = (props) => {
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
      }}
    >
      {isHovering && (
        <Flex
          sx={{
            bg: "background",
            border: "1px solid",
            bottom: "100%",
            left: "50%",
            mb: 1,
            p: 1,
            position: "absolute",
            transform: "translate3d(-50%, 0, 0)",
          }}
        >
          <IconButton>
            <Edit2 />
          </IconButton>
          <IconButton>
            <Plus />
          </IconButton>
        </Flex>
      )}
      <Text>{props.text}</Text>
      {props.isLast && <InlineInput />}
    </Flex>
  );
};

StoryWord.propTypes = {
  text: PropTypes.string,
  isLast: PropTypes.bool,
};

export default StoryWord;
