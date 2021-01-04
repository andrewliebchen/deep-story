import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the selected ref and set up editing state
  const [selectedRefId, setSelectedRefId] = useState("");

  // Global ref filter
  const [refFilterIndex, setRefFilterIndex] = useState(0);

  // Toast
  const [toastMessage, setToastMessage] = useState(false);

  const [showGlobalSearch, setShowGlobalSearch] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...props,
        refFilterIndex,
        selectedRefId,
        setRefFilterIndex,
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
