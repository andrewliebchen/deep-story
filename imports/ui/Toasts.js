import { Flex, Text } from "theme-ui";
import AppContext from "./AppContext";
import React, { useContext, useEffect } from "react";
import ReactInterval from "react-interval";

const Toasts = (props) => {
  const { toastMessage, setToastMessage } = useContext(AppContext);

  return (
    <Flex
      sx={{
        position: "fixed",
        zIndex: 1,
        left: "50%",
        bottom: 3,
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
