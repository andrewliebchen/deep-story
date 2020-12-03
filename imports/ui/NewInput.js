import { Input, Flex } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useKeycodes } from "@accessible/use-keycode";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useState, useContext } from "react";
import Highlight from "./Highlight";

const NewInput = (props) => {
  const { userId, refs, parentId } = useContext(AppContext);
  const [value, setValue] = useState("");
  const { refId } = useParams();

  const parentIsUser = userId === refId;

  const ref = useKeycodes({
    13: () => {
      Meteor.call(
        "refs.insert",
        {
          createdAt: Date.now(),
          createdBy: userId,
          parentId: refId,
          text: value,
          type: "text",
        },
        parentIsUser
      );
      Meteor.call(
        "refs.insert",
        {
          createdAt: Date.now(),
          createdBy: userId,
          parentId: refId,
          type: "break",
        },
        parentIsUser
      );
      setValue("");
    },
    32: () => {
      Meteor.call(
        "refs.insert",
        {
          createdAt: Date.now(),
          createdBy: userId,
          parentId: refId,
          text: value,
          type: "text",
        },
        parentIsUser
      );
      setValue("");
    },
  });

  return (
    <Flex sx={{ variant: "flex.controlContainer" }}>
      <Input
        autoFocus
        placeholder={refs.length > 0 ? "" : "Tell your story..."}
        onBlur={(event) => event.target.focus()}
        onChange={(event) => setValue(event.target.value.trim())}
        ref={ref}
        tabIndex={0}
        value={value}
        variant="input.inline"
      />
      <Highlight />
    </Flex>
  );
};

export default NewInput;
