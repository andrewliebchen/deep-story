import { Box, Flex } from "theme-ui";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import Story from "./Story";
import Toolbar from "./Toolbar";

const App = () => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);

  return (
    <>
      <Toolbar />
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box sx={{ m: 3, width: "container" }}>
          <Story />
        </Box>
      </Flex>
    </>
  );
};

export default App;
