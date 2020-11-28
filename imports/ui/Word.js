import { Flex, Text } from "theme-ui";
import AppContext from "./AppContext";
import InlineInput from "./InlineInput";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import ContentEditable from "react-contenteditable";
import { Meteor } from "meteor/meteor";

// <ContentEditable
//               innerRef={this.contentEditable}
//               html={this.state.html} // innerHTML of the editable div
//               disabled={false}       // use true to disable editing
//               onChange={this.handleChange} // handle innerHTML change
//               tagName='article' // Use a custom HTML tag (uses a div by default)
//             />

const Word = (props) => {
  const {
    selectedRef,
    selectedRefId,
    setSelectedRefId,
    editingRefId,
    setEditingRefId,
  } = useContext(AppContext);

  const isSelected = selectedRefId === props._id;
  const isEditing = editingRefId === props._id;

  return (
    <Flex>
      <Flex
        sx={{
          bg: isEditing ? "primary" : isSelected && "primaryBackground",
          cursor: "pointer",
          flexShrink: 0,
          position: "relative",
          userSelect: "none",
          "&:hover": {
            bg: isEditing ? "primary" : "primaryBackground",
            color: isEditing ? "background" : "text",
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
  text: PropTypes.string,
};

export default Word;
