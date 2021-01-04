import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the selected ref and set up editing state
  const [selectedRefId, setSelectedRefId] = useState("");

  // Toast
  const [toastMessage, setToastMessage] = useState(false);

  const [showGlobalSearch, setShowGlobalSearch] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...props,
        selectedRefId,
        setSelectedRefId,
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
