import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Toast
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
