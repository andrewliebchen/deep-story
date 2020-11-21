import { useTracker } from "meteor/react-meteor-data";
import { useColorMode } from "theme-ui";
import AppContext from "./AppContext";
import React, { useState } from "react";
import { RefsCollection } from "../api/refs";

const AppProvider = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const [currentUser, setCurrentUser] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [editing, setEditing] = useState(false);
  const stories = useTracker(() =>
    RefsCollection.find({ parentId: currentUser }).fetch()
  );

  return (
    <AppContext.Provider
      value={{
        ...props,
        colorMode,
        currentUser,
        editing,
        selectedId,
        setColorMode,
        setCurrentUser,
        setEditing,
        setSelectedId,
        stories,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
