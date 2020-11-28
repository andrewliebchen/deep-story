import { Input } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import { useKeycodes } from "@accessible/use-keycode";

const InlineInput = (props) => {
  const { selectedRef, setSelectedRefId } = useContext(AppContext);
  const ref = useKeycodes({
    27: () => setSelectedRefId(""),
  });

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
      ref={ref}
      tabIndex={0}
      variant="input.inline"
    />
  );
};

export default InlineInput;
