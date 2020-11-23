import React, { useState } from "react";
import { Input } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import { RefsCollection } from "../api/refs";
import PropTypes from "prop-types";

const InlineInput = (props) => {
  const [value, setValue] = useState("");
  const ref = useKeycodes({
    13: () => {
      RefsCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
        parentId: props.user._id,
      });
      RefsCollection.insert({
        createdAt: Date.now(),
        type: "break",
        parentId: props.user._id,
      });
      setValue("");
    },
    32: () => {
      RefsCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
        parentId: props.user._id,
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
  user: PropTypes.object,
};

export default InlineInput;
