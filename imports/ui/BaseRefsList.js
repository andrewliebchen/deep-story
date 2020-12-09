import { Box, Button, Flex, Grid, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { Link, useHistory } from "react-router-dom";

const BaseRefsList = () => {
  const { refs, userId } = useContext(AppContext);
  const history = useHistory();

  return (
    <Box>
      <Button
        variant="button.floatingPrimary"
        onClick={() =>
          Meteor.call("refs.insert", { type: "base" }, (error, id) =>
            history.push(`/refs/${id}`)
          )
        }
      >
        <UilPlus />
        <Text ml={2}>Create</Text>
      </Button>
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
          {refs
            .filter((ref) => ref.type === "base")
            .map((ref) => (
              <Link key={ref._id} to={`/refs/${ref._id}`}>
                {ref._id}
              </Link>
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default BaseRefsList;
