import React, { useState } from "react";
import { Input } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import { StoriesCollection } from "../api/stories";
import PropTypes from "prop-types";

const InlineInput = (props) => {
  console.log(props);
  const [value, setValue] = useState("");
  const ref = useKeycodes({
    13: () => {
      StoriesCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
        parentId: props.currentUser,
      });
      StoriesCollection.insert({
        createdAt: Date.now(),
        type: "break",
        parentId: props.currentUser,
      });
      setValue("");
    },
    32: () => {
      StoriesCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
        parentId: props.currentUser,
      });
      setValue("");
    },
  });

  return (
    <Input
      autoFocus={true}
      ref={ref}
      value={value}
      onChange={(event) => setValue(event.target.value.trim())}
    />
  );
};

InlineInput.propTypes = {
  currentUser: PropTypes.string.isRequired,
};

export default InlineInput;
