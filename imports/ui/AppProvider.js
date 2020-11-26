import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
import { useColorMode } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const [selectedId, setSelectedId] = useState("");
  const user = useTracker(() => Meteor.users.findOne({ _id: Meteor.userId() }));
  const refs = useTracker(() =>
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
        refs,
        user,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
