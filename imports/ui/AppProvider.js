import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = (props) => {
  // Get the selected ref and set up editing state
  // "Z8JfW3Nm7FzKh6XPF"
  // "nJNc7a28Cba6WXfQE"
  const [selectedRefId, setSelectedRefId] = useState("nJNc7a28Cba6WXfQE");

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
