import { Box, Flex, IconButton, Button, Text } from "theme-ui";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { refTypes } from "../utils/types";
import AppContext from "./AppContext";
import React, { useContext } from "react";
import Story from "./Story";
import Toolbar from "./Toolbar";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilTrash from "@iconscout/react-unicons/icons/uil-trash";

const App = () => {
  const { selectedRefId, setSelectedRefId } = useContext(AppContext);

  return (
    <>
      <Toolbar>
        {selectedRefId ? (
          <>
            <IconButton
              variant="iconButton.floating"
              children={<UilTimes />}
              onClick={() => setSelectedRefId(false)}
            />
            <IconButton
              sx={{ mx: 2, variant: "iconButton.floatingNegative" }}
              children={<UilTrash />}
              // onClick={() =>
              //   window.confirm("You sure you want to delete this?") &&
              //   Meteor.call("refs.remove", selectedRefId)
              // }
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
