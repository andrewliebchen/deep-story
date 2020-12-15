import { Box, Button, Flex, Grid, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import { Link, useHistory } from "react-router-dom";
import { useAccount, useBaseRefs } from "../utils/hooks";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import Header from "./Header";

const BaseRefsList = () => {
  const { getRefs } = useContext(AppContext);
  const { userId } = useAccount();
  const { refs } = useBaseRefs();
  const history = useHistory();

  return (
    <>
      <Header />
      <Button
        variant="button.primary"
        onClick={() =>
          Meteor.call(
            "refs.insert",
            { type: "base", parentId: userId },
            (error, id) => history.push(`/refs/${id}`)
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
          {refs.map((ref) => (
            <Link key={ref._id} to={`/refs/${ref._id}`}>
              {ref._id}
            </Link>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default BaseRefsList;
