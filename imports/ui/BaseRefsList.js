import { Box, Button, Flex, Grid, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useAccount, useBaseRefs } from "../utils/hooks";
import React from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";

const BaseRefsList = () => {
  const { refs } = useBaseRefs();

  return (
    <Flex
      sx={{
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Grid
        sx={{
          gap: 0,
          gridTemplateColumns: "repeat(3, 1fr)",
          m: 3,
          width: "container",
        }}
      >
        {refs.map((ref) => (
          <Link key={ref._id} to={`/refs/${ref._id}`}>
            {ref._id}
          </Link>
        ))}
      </Grid>
    </Flex>
  );
};

export default BaseRefsList;
