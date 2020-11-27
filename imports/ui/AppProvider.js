import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
import { useColorMode } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  const parentId = window.location.pathname.replace("/r/", "");

  const [colorMode, setColorMode] = useColorMode();
  const refs = useTracker(() =>
    RefsCollection.find({ parentId: parentId }).fetch()
  );
  const [selectedId, setSelectedId] = useState("");
  const user = useTracker(() => Meteor.users.findOne({ _id: Meteor.userId() }));

  // Once we have a user, get the page's story linked list
  const story =
    typeof user !== "undefined" &&
    (user._id === parentId
      ? user.profile.story
      : RefsCollection.findOne(parentId).story);

  return (
    <AppContext.Provider
      value={{
        ...props,
        colorMode,
        selectedId,
        setColorMode,
        setSelectedId,
        refs,
        user,
        parentId,
        story,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
