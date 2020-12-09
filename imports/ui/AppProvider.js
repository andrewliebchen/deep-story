import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the selected ref and set up editing state
  const [selectedRefId, setSelectedRefId] = useState(false);

  // Helper function to check if the id is the selectedId
  const isSelected = (id) => {
    return id === selectedRefId;
  };

  return (
    <AppContext.Provider
      value={{
        ...props,
        selectedRefId,
        setSelectedRefId,
        isSelected,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
