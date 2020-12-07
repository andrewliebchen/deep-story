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
  let refs = [];
  refs = useTracker(() => RefsCollection.find({ createdBy: userId }).fetch());

  // Helper function to get the ref data from it's id
  const getRef = (id, field = "_id") => refs.find((ref) => ref[field] === id);

  // Get the selected ref and set up editing state
  const [selectedRefId, setSelectedRefId] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  // Type of new mock to create`
  const [newMockType, setNewMockType] = useState("text");

  return (
    <AppContext.Provider
      value={{
        ...props,
        getRef,
        inputFocused,
        newMockType,
        refs,
        selectedRefId,
        setInputFocused,
        setNewMockType,
        setSelectedRefId,
        user,
        userId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
