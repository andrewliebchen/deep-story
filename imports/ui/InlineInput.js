import React, { useState } from "react";
import { Input } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import { StoriesCollection } from "../api/stories";

export default (props) => {
  const [value, setValue] = useState("");
  const ref = useKeycodes({
    13: () => {
      console.log("break");
      StoriesCollection.insert({
        createdAt: Date.now(),
        type: "text",
        text: value,
      });
      StoriesCollection.insert({
        createdAt: Date.now(),
        type: "break",
      });
      setValue("");
    },
    32: () => {
      StoriesCollection.insert({
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
      onChange={(event) => setValue(event.target.value.trim())}
    />
  );
};
