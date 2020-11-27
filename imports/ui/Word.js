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
        <Text variant="ref">
          <ContentEditable
            html={props.text}
            onChange={(event) =>
              Meteor.call(
                "refs.update",
                selectedId,
                {
                  text: event.target.value,
                },
                (error, id) => console.log("yes")
              )
            }
          />
        </Text>
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
