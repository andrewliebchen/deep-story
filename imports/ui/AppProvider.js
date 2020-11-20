import { useTracker } from "meteor/react-meteor-data";
import { useColorMode } from "theme-ui";
import AppContext from "./AppContext";
import React, { useState } from "react";
import { StoriesCollection } from "../api/stories";

const AppProvider = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const [currentUser, setCurrentUser] = useState("");
  const stories = useTracker(() =>
    StoriesCollection.find({ parentId: currentUser }).fetch()
  );

  return (
    <AppContext.Provider
      value={{
        ...props,
        colorMode,
        setColorMode,
        currentUser,
        setCurrentUser,
        stories,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
