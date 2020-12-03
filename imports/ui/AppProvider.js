import { isReady } from "../utils/helpers";
import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
import { useColorMode } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the current user, who can also be the parent.
  const userId = Meteor.userId();
  const user = useTracker(() => Meteor.users.findOne({ _id: userId }));

  // Color mode
  const [colorMode, setColorMode] = useColorMode();

  // Get the parentId from the url and the parent record (if one)
  const [parentId, setParentId] = useState(
    window.location.pathname.replace("/refs/", "")
  );
  const parentRef = useTracker(() => RefsCollection.findOne(parentId));

  // Get all the refs for this parentId
  const refs = useTracker(() =>
    RefsCollection.find({ createdBy: userId }).fetch()
  );

  // Get the selected ref and set up editing state
  // dk9Be6REK7ihKKa8s
  const [selectedRefId, setSelectedRefId] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const selectedRef = useTracker(() => RefsCollection.findOne(selectedRefId));

  // Once we have a  user, get the page's story array.
  // Convert that array to a yallist linked list as necessary.
  let story = [];
  if (isReady(user) && parentId === user._id) {
    story = user.profile.story;
  } else {
    story = isReady(parentRef) && parentRef.story;
  }

  return (
    <AppContext.Provider
      value={{
        ...props,
        colorMode,
        inputFocused,
        setInputFocused,
        parentRef,
        refs,
        selectedRef,
        selectedRefId,
        setColorMode,
        setParentId,
        setSelectedRefId,
        story,
        user,
        userId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
