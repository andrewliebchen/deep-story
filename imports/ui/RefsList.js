import React, { useContext } from "react";
import { Box, Flex, Text, Button, Grid, IconButton } from "theme-ui";
import AppContext from "./AppContext";
import Toolbar from "./Toolbar";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { Link } from "react-router-dom";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";

const RefsList = () => {
  const { refs, userId, parentIsUser } = useContext(AppContext);

  return (
    <Box>
      <Toolbar>
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
              },
              parentIsUser,
              null,
              (error, id) => console.log(id)
            )
          }
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
          {refs
            .filter((ref) => !ref.parentId)
            .map((ref) => (
              <Link key={ref._id} to={`/refs/${ref._id}`}>
                <Flex
                  sx={{
                    variant: "flex.tile",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Text variant="text.ref">{ref._id}</Text>
                  <IconButton
                    sx={{ mx: 2, variant: "iconButton.negative" }}
                    children={<UilTrash />}
                    onClick={(event) => {
                      window.confirm("You sure you want to delete this?") &&
                        Meteor.call("refs.remove", ref._id);
                    }}
                  />
                </Flex>
              </Link>
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default RefsList;
