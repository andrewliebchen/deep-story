import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the selected ref and set up editing state
  // "Z8JfW3Nm7FzKh6XPF"
  const [selectedRefId, setSelectedRefId] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...props,
        selectedRefId,
        setSelectedRefId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
