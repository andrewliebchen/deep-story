import React, { useContext } from "react";
import { Box, Flex, Text, Button } from "theme-ui";
import AppContext from "./AppContext";
import Toolbar from "./Toolbar";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";

const RefsList = () => {
  const { refs } = useContext(AppContext);

  return (
    <Box>
      <Toolbar>
        <Button
          variant="button.floatingPrimary"
          onClick={() => console.log("create")}
        >
          <UilPlus />
          <Text ml={2}>Create</Text>
        </Button>
      </Toolbar>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box sx={{ m: 3, width: "container" }}>
          {refs.map((ref) => (
            <Text key={ref._id}>{ref._id}</Text>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default RefsList;
