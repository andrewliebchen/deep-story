import { Flex, Text } from "theme-ui";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import ReactInterval from "react-interval";

const Toasts = (props) => {
  const { toastMessage, setToastMessage } = useContext(AppContext);

  return (
    <Flex
      sx={{
        bottom: 3,
        left: "50%",
        position: "fixed",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      {toastMessage && (
        <Flex variant="flex.toast">
          <ReactInterval
            callback={() => setToastMessage(false)}
            enabled
            timeout={5000}
          />
          <Text>{toastMessage}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Toasts;
