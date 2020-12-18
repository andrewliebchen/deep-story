import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the selected ref and set up editing state
  // "sugwmmdqPscuDgvnB"
  const [selectedRefId, setSelectedRefId] = useState("");

  // Toast
  const [toastMessage, setToastMessage] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...props,
        selectedRefId,
        setSelectedRefId,
        toastMessage,
        setToastMessage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
