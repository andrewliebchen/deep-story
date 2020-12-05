import { Box, Flex, IconButton } from "theme-ui";
import { Meteor } from "meteor/meteor";
import { refTypes } from "../utils/types";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import React, { useContext, useEffect } from "react";
import Story from "./Story";
import Toolbar from "./Toolbar";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import UilArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";

const App = () => {
  const { setParentId, selectedRefId } = useContext(AppContext);
  const { refId } = useParams();

  // Can only get the params inside the router. Pass this to the provider
  useEffect(() => setParentId(refId));

  return (
    <>
      <Toolbar>
        {selectedRefId ? (
          <>
            <IconButton
              variant="iconButton.floating"
              children={<UilTimes />}
              onClick={() => setSelectedRefId("")}
            />
            <IconButton
              sx={{ mx: 2, variant: "iconButton.floatingNegative" }}
              children={<UilTrash />}
              onClick={() =>
                window.confirm("You sure you want to delete this?") &&
                Meteor.call("refs.remove", selectedRefId)
              }
            />
            <Link to={`/refs/${selectedRefId}`}>
              <Button variant="button.floatingPrimary">
                <UilArrowDown />
                <Text ml={2}>Dive</Text>
              </Button>
            </Link>
          </>
        ) : (
          <>
            {Object.keys(refTypes).map((type) => (
              <IconButton
                key={type}
                children={refTypes[type].icon}
                title={type}
                sx={{ mx: 1, variant: "iconButton.floating" }}
              />
            ))}
          </>
        )}
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
          <Story />
        </Box>
      </Flex>
    </>
  );
};

export default App;
