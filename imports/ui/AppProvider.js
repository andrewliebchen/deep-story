import { Meteor } from "meteor/meteor";
import { RefsCollection } from "../api/refs";
import { useColorMode } from "theme-ui";
import { useTracker } from "meteor/react-meteor-data";
import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  const parentId = window.location.pathname.replace("/r/", "");

  const [colorMode, setColorMode] = useColorMode();
  const [selectedId, setSelectedId] = useState("");
  const user = useTracker(() => Meteor.users.findOne({ _id: Meteor.userId() }));
  const refs = useTracker(() =>
    RefsCollection.find({ parentId: parentId }).fetch()
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
        parentId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
