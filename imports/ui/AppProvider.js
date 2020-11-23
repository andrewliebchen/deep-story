import { RefsCollection } from "../api/refs";
import { useColorMode } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

const AppProvider = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const [selectedId, setSelectedId] = useState("");
  const user = useTracker(() => Meteor.users.findOne({ _id: Meteor.userId() }));
  const stories = useTracker(() =>
    user ? RefsCollection.find({ parentId: user._id }).fetch() : []
  );

  return (
    <AppContext.Provider
      value={{
        ...props,
        colorMode,
        selectedId,
        setColorMode,
        setSelectedId,
        stories,
        user,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
