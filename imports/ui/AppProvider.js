import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  const [stopEditMode, setStopEditMode] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...props,
        setShowGlobalSearch,
        setToastMessage,
        showGlobalSearch,
        toastMessage,
        stopEditMode,
        setStopEditMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
