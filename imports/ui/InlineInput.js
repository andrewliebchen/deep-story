import { Flex, Input, Text } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import Cursor from "./Cursor";
import React, { useState, useContext } from "react";

const InlineInput = () => {
  const { parentId, story } = useContext(AppContext);
  const [value, setValue] = useState("");
  const ref = useKeycodes({
    13: () => {
      Meteor.call("refs.insert", {
        createdAt: Date.now(),
        parentId: parentId,
        text: value,
        type: "text",
      });
      Meteor.call("refs.insert", {
        createdAt: Date.now(),
        parentId: parentId,
        type: "break",
      });
      setValue("");
    },
    32: () => {
      Meteor.call("refs.insert", {
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
        onBlur={(event) => event.target.focus()}
        sx={{
          appearance: "none",
          border: 0,
          caretColor: "transparent",
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
