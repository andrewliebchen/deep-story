import React, { useState } from "react";
import { Input } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import { ReferencesCollection } from "../api/references";

export default (props) => {
  const [value, setValue] = useState("");
  const ref = useKeycodes({
    13: () => {
      console.log("break");
      ReferencesCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
      });
      ReferencesCollection.insert({
        createdAt: Date.now(),
        type: "break",
      });
      setValue("");
    },
    32: () => {
      ReferencesCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
      });
      setValue("");
    },
  });

  return (
    <Input
      autoFocus={true}
      ref={ref}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
