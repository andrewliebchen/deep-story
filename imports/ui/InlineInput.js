import { Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import React, { useContext } from "react";

const InlineInput = (props) => {
  const { selectedRef } = useContext(AppContext);

  return (
    <Input
      autoFocus
      onBlur={(event) => event.target.focus()}
      defaultValue={selectedRef.text}
      onChange={(event) => {
        Meteor.call("refs.update", selectedRef._id, {
          text: event.target.value,
          modifiedAt: Date.now(),
        });
      }}
      tabIndex={0}
      variant="input.inline"
    />
  );
};

export default InlineInput;
