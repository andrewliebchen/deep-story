import { Box, Flex, Input, Text } from "theme-ui";
import { RefsCollection } from "../api/refs";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import React, { useState, useContext } from "react";
import Cursor from "./Cursor";
import yallist from "yallist";

const InlineInput = () => {
  const { parentId } = useContext(AppContext);
  const [value, setValue] = useState("");
  const ref = useKeycodes({
    13: () => {
      RefsCollection.insert({
        createdAt: Date.now(),
        parentId: parentId,
        story: yallist.create(),
        text: value,
        type: "text",
      });
      RefsCollection.insert({
        createdAt: Date.now(),
        parentId: parentId,
        story: yallist.create(),
        type: "break",
      });
      setValue("");
    },
    32: () => {
      RefsCollection.insert({
        createdAt: Date.now(),
        parentId: parentId,
        story: yallist.create(),
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
          overflow: "visible",
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
