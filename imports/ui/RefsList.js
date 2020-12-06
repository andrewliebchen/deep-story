import { Box, Button, Flex, Grid, Text } from "theme-ui";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import Toolbar from "./Toolbar";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import { isReady } from "../utils/helpers";

const RefsList = () => {
  const { refs, userId } = useContext(AppContext);

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
      </Toolbar>
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
              <Link key={ref._id} to={`/refs/${ref._id}`}>
                {ref.story.length > 0 ? (
                  <Flex
                    sx={{
                      variant: "flex.tile",
                      flexFlow: "wrap",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {ref.story.map((id) => {
                      const wordRef = refs.find((ref) => ref._id === id);
                      return (
                        <Text
                          key={id}
                          children={isReady(wordRef) && `${wordRef.text} `}
                          sx={{ variant: "text.ref", fontSize: "small" }}
                        />
                      );
                    })}
                  </Flex>
                ) : (
                  <Flex
                    sx={{
                      variant: "flex.tile",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      sx={{
                        variant: "text.ref",
                        color: "textSecondary",
                        fontSize: "small",
                      }}
                    >
                      Nothing yet
                    </Text>
                  </Flex>
                )}
              </Link>
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default RefsList;
