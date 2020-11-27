import { Flex, Input, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import Cursor from "./Cursor";
import React, { useState, useContext } from "react";

const InlineInput = () => {
  const { parentId, parentIsUser, story } = useContext(AppContext);
  const [value, setValue] = useState("");
  // Make this more universal:
  // - Update refs.udpate to include parentIsUser,
  // - Set the initial value if passed as a prop.
  // - Disabled keyCode for enter if editing
  // - If editing, the onChange should be an update call, if not it should be the state update.
  // - Could do this with two different inputs...one with the refs and everything for the end of the line type, the other without for the ref editing type

  const ref = useKeycodes({
    13: () => {
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        parentId: parentId,
        text: value,
        type: "text",
      });
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        parentId: parentId,
        type: "break",
      });
      setValue("");
    },
    32: () => {
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        parentId: parentId,
        text: value,
        type: "text",
      });
      setValue("");
    },
  });

  return (
    <Flex>
      <Input
        autoFocus
        ref={ref}
        value={value}
        onChange={(event) => setValue(event.target.value.trim())}
        tabIndex={0}
        sx={{
          appearance: "none",
          border: 0,
          caretColor: "transparent",
          overflow: "hidden",
          p: 0,
          width: 0,
          "&:focus": {
            outline: "none",
          },
        }}
      />
      <Text variant="ref">{value}</Text>
      <Cursor />
    </Flex>
  );
};

export default InlineInput;
