import { Box, Button, Flex, Grid, Text } from "theme-ui";
import { isReady } from "../utils/helpers";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import BaseRefsListTile from "./RefsListTile";
import Toolbar from "./Toolbar";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";

const BaseRefsList = () => {
  const { refs, userId } = useContext(AppContext);

  return (
    <Box>
      <Toolbar
        actions={
          <Button
            variant="button.floatingPrimary"
            onClick={() =>
              Meteor.call(
                "refs.insert",
                {
                  createdAt: Date.now(),
                  createdBy: userId,
                  parentId: null,
                  type: "text",
                  story: [],
                },
                null,
                (error, id) => console.log(id)
              )
            }
          >
            <UilPlus />
            <Text ml={2}>Create</Text>
          </Button>
        }
      />
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
            .filter((ref) => !ref.parentId)
            .map((ref) => (
              <BaseRefsListTile key={ref._id} {...ref} />
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default BaseRefsList;
