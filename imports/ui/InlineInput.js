import { Input, Flex } from "theme-ui";
import { Meteor } from "meteor/meteor";
import AppContext from "./AppContext";
import React, { useContext, useEffect, useState } from "react";

const InlineInput = (props) => {
  const { selectedRef, setSelectedRefId } = useContext(AppContext);
  const [width, setWidth] = useState(0);

  useEffect(() => setWidth(`${selectedRef.text.length}ch`));

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
      sx={{ variant: "input.inline", width }}
    />
  );
};

export default InlineInput;
