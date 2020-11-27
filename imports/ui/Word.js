import { Flex, Text } from "theme-ui";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const Word = (props) => {
  const { selectedId, setSelectedId } = useContext(AppContext);
  const isSelected = selectedId === props._id;

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
        onClick={() => setSelectedId(isSelected ? "" : props._id)}
      >
        <Text variant="ref">{props.text}</Text>
      </Flex>
      <Text variant="ref"> </Text>
    </Flex>
  );
};

Word.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
};

export default Word;
