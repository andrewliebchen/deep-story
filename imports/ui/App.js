import { Box, Flex, IconButton } from "theme-ui";
import { isReady } from "../utils/helpers";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useContext, useEffect } from "react";
import Story from "./Story";
import Toolbar from "./Toolbar";

const App = () => {
  const { setParentId } = useContext(AppContext);
  const { refId } = useParams();

  // Can only get the params inside the router. Pass this to the provider
  useEffect(() => setParentId(refId));

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
