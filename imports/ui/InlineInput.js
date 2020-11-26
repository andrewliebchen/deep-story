import { Input } from "theme-ui";
import { RefsCollection } from "../api/refs";
import { useKeycodes } from "@accessible/use-keycode";
import AppContext from "./AppContext";
import React, { useState, useContext } from "react";

const InlineInput = () => {
  const { parentId } = useContext(AppContext);
  const [value, setValue] = useState("");
  const ref = useKeycodes({
    13: () => {
      RefsCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
        parentId: parentId,
      });
      RefsCollection.insert({
        createdAt: Date.now(),
        type: "break",
        parentId: parentId,
      });
      setValue("");
    },
    32: () => {
      RefsCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
        parentId: parentId,
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

export default InlineInput;
