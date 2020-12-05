import React, { useContext } from "react";
import { Box, Flex, Text, Button, Grid } from "theme-ui";
import AppContext from "./AppContext";
import Toolbar from "./Toolbar";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { Link } from "react-router-dom";

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
        <Grid
          sx={{
            gridTemplateColumns: "repeat(3, 1fr)",
            m: 3,
            gap: 0,
            width: "container",
          }}
        >
          {refs.map((ref) => (
            <Link key={ref._id} to={`/refs/${ref._id}`}>
              <Flex variant="flex.tile">
                <Text variant="text.ref">{ref.text}</Text>
              </Flex>
            </Link>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default RefsList;
