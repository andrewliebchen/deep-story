/** @jsx jsx */

import { Box, jsx } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useGetText } from "../utils/hooks";
import PropTypes from "prop-types";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const RefTextEdit = (props) => {
  const text = useGetText({ parentId: props._id });
  console.log(text);
  return (
    isReady(text) && (
      <TextareaAutosize
        onChange={(event) =>
          Meteor.call("texts.update", text._id, {
            content: event.target.value,
          })
        }
        defaultValue={text.content}
        placeholder="Tell a story..."
        sx={{ variant: "forms.textarea" }}
      />
    )
  );
};

RefTextEdit.propTypes = {
  _id: PropTypes.string,
  content: PropTypes.node,
};

export default RefTextEdit;
