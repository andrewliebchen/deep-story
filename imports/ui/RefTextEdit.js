/** @jsx jsx */

import { Box, jsx } from "theme-ui";
import PropTypes from "prop-types";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const RefTextEdit = (props) => (
  <TextareaAutosize
    onChange={(event) =>
      Meteor.call("refs.update", props._id, {
        content: event.target.value,
      })
    }
    defaultValue={props.content}
    placeholder="Tell a story..."
    sx={{ variant: "forms.textarea" }}
  />
);

RefTextEdit.propTypes = {
  _id: PropTypes.string,
  content: PropTypes.node,
  title: PropTypes.string,
};

export default RefTextEdit;
