/** @jsx jsx */

import { Box, Flex, Input, IconButton, Text, Textarea, jsx } from "theme-ui";
import PropTypes from "prop-types";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import TitleInput from "./TitleInput";

const RefTextEdit = (props) => (
  <Box>
    <TitleInput {...props} />
    <TextareaAutosize
      onChange={(event) =>
        Meteor.call("refs.update", props._id, {
          content: event.target.value,
        })
      }
      defaultValue={props.content}
      placeholder="Tell a story..."
      sx={{ variant: "textarea.ref", mt: 2 }}
    />
  </Box>
);

RefTextEdit.propTypes = {
  _id: PropTypes.string,
  content: PropTypes.node,
  title: PropTypes.string,
};

export default RefTextEdit;
