import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  const [stopEditMode, setStopEditMode] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);
  const [showGlobalSearch, setShowGlobalSearch] = useState(true);

  return (
    <AppContext.Provider
      value={{
        ...props,
        setShowGlobalSearch,
        setStopEditMode,
        setToastMessage,
        showGlobalSearch,
        stopEditMode,
        toastMessage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
