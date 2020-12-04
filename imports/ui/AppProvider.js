import { isReady } from "../utils/helpers";
import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the current user, who can also be the parent.
  const userId = Meteor.userId();
  const user = useTracker(() => Meteor.users.findOne({ _id: userId }));

  // Get all the refs for this user
  const refs = useTracker(() =>
    RefsCollection.find({ createdBy: userId }).fetch()
  );

  // Get the parentId from the url and the parent record (if one)
  const [parentId, setParentId] = useState("");
  const parentRef = refs.find((ref) => ref.id === parentId);

  // Get the selected ref and set up editing state
  const [selectedRefId, setSelectedRefId] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const selectedRef = refs.find((ref) => ref.id === selectedRefId);

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
        inputFocused,
        setInputFocused,
        parentRef,
        refs,
        selectedRef,
        selectedRefId,
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
