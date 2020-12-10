import React, { useContext, useEffect } from "react";
import AppContext from "./AppContext";
import { Flex, Text } from "theme-ui";
import ReactInterval from "react-interval";

const Toasts = (props) => {
  const { toastMessage, setToastMessage } = useContext(AppContext);

  return (
    <Flex
      sx={{
        position: "fixed",
        zIndex: 1,
        left: "50%",
        top: 3,
        transform: "translateX(-50%)",
      }}
    >
      {toastMessage && (
        <Flex variant="flex.toast">
          <ReactInterval
            timeout={5000}
            callback={() => setToastMessage(false)}
            enabled
          />
          <Text>{toastMessage}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Toasts;
