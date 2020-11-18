import { Box, Flex, Heading, IconButton, useColorMode } from "theme-ui";
import { Moon, Sun } from "react-feather";
import React, { useState } from "react";
import Story from "./Story";
import UserToggle from "./UserToggle";

const App = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const [currentUser, setCurrentUser] = useState("");

  return (
    <Flex sx={{ justifyContent: "center" }}>
      <Box sx={{ m: 3, width: "container" }}>
        <Flex
          sx={{ mb: 3, alignItems: "center", justifyContent: "space-between" }}
        >
          <UserToggle
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
          <IconButton
            title="Toggle color mode"
            onClick={() =>
              setColorMode(colorMode === "default" ? "dark" : "default")
            }
          >
            {colorMode === "default" ? <Moon /> : <Sun />}
          </IconButton>
        </Flex>
        <Story currentUser={currentUser} />
      </Box>
    </Flex>
  );
};

export default App;
