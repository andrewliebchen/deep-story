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

  // Get the selected ref and set up editing state
  const [selectedRefId, setSelectedRefId] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...props,
        inputFocused,
        setInputFocused,
        refs,
        selectedRefId,
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
