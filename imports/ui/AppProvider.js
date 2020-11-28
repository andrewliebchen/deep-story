import { isReady } from "../utils/helpers";
import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
import { useColorMode } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import React, { useState, useEffect } from "react";

const AppProvider = (props) => {
  // Color mode
  const [colorMode, setColorMode] = useColorMode();

  // Get the parentId from the url and the parent record (if one)
  const parentId = window.location.pathname.replace("/r/", "");
  const parentRef = useTracker(() => RefsCollection.findOne(parentId));

  // Get all the refs for this parentId
  const refs = useTracker(() =>
    RefsCollection.find({ parentId: parentId }).fetch()
  );

  // Get the selected ref and set up editing state
  const [selectedRefId, setSelectedRefId] = useState("");
  const [editingRefId, setEditingRefId] = useState(""); // probably can remove this
  const selectedRef = useTracker(() => RefsCollection.findOne(selectedRefId));

  // Get the current user, who can also be the parent.
  const user = useTracker(() => Meteor.users.findOne({ _id: Meteor.userId() }));

  // A check to see if the parent is the user
  const parentIsUser = isReady(user) && parentId === user._id;

  // Once we have a  user, get the page's story linked list
  let story = [];
  if (parentIsUser) {
    story = user.profile.story;
  } else {
    story = isReady(parentRef) && parentRef.story;
  }

  return (
    <AppContext.Provider
      value={{
        ...props,
        colorMode,
        editingRefId,
        parentId,
        parentIsUser,
        parentRef,
        refs,
        selectedRef,
        selectedRefId,
        setColorMode,
        setEditingRefId,
        setSelectedRefId,
        story,
        user,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
