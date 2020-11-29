import { Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import React, { useState, useContext } from "react";

const NewInput = (props) => {
  const { parentId, userId } = useContext(AppContext);
  const [value, setValue] = useState("");

  const parentIsUser = userId === parentId;

  const ref = useKeycodes({
    13: () => {
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        createdBy: userId,
        parentId: parentId,
        text: value,
        type: "text",
      });
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        createdBy: userId,
        parentId: parentId,
        type: "break",
      });
      setValue("");
    },
    32: () => {
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        createdBy: userId,
        parentId: parentId,
        text: value,
        type: "text",
      });
      setValue("");
    },
  });

  return (
    <Input
      autoFocus
      onBlur={(event) => event.target.focus()}
      onChange={(event) => setValue(event.target.value.trim())}
      ref={ref}
      tabIndex={0}
      value={value}
      variant="input.inline"
    />
  );
};

export default NewInput;
