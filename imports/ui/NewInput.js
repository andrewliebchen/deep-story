import { Input, Flex } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { useKeycodes } from "@accessible/use-keycode";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useState, useContext } from "react";
import Highlight from "./Highlight";

const NewInput = (props) => {
  const { userId } = useContext(AppContext);
  const [value, setValue] = useState("");
  const { refId } = useParams();

  const parentIsUser = userId === refId;

  const ref = useKeycodes({
    13: () => {
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        createdBy: userId,
        parentId: refId,
        text: value,
        type: "text",
      });
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        createdBy: userId,
        parentId: refId,
        type: "break",
      });
      setValue("");
    },
    32: () => {
      Meteor.call("refs.insert", parentIsUser, {
        createdAt: Date.now(),
        createdBy: userId,
        parentId: refId,
        text: value,
        type: "text",
      });
      setValue("");
    },
  });

  return (
    <Flex sx={{ variant: "flex.controlContainer" }}>
      <Input
        autoFocus
        placeholder="Tell your story..."
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
