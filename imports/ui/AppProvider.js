import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  const [taskCheckboxHovering, setTaskCheckboxHovering] = useState(false);
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
        taskCheckboxHovering,
        setTaskCheckboxHovering,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
