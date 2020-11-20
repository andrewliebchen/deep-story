import { Box, Button, Flex, IconButton, Input, Heading, Text } from "theme-ui";
import { User, X } from "react-feather";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import React, { useState } from "react";

const UserToggle = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [value, setValue] = useState("");

  return (
    <AppContext.Consumer>
      {(props) => (
        <Box>
          <IconButton
            title={`Switch from ${props.currentUser}`}
            onClick={() => setShowOverlay(true)}
          >
            <User />
          </IconButton>

          {showOverlay && (
            <Flex
              sx={{
                alignItems: "center",
                height: "100vh",
                justifyContent: "center",
                position: "fixed",
                width: "100vw",
                top: 0,
                left: 0,
                bg: "background",
                zIndex: 1,
              }}
            >
              <Box sx={{ width: "container" }}>
                <Flex
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Heading>Who are you?</Heading>
                  <IconButton
                    title="Cancel"
                    onClick={() => setShowOverlay(false)}
                  >
                    <X />
                  </IconButton>
                </Flex>
                <form>
                  <Input
                    placeholder="Enter your id"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    mb={3}
                  />
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      props.setCurrentUser(value);
                      setValue("");
                      setShowOverlay(false);
                    }}
                  >
                    Get going
                  </Button>
                </form>
              </Box>
            </Flex>
          )}
        </Box>
      )}
    </AppContext.Consumer>
  );
};

UserToggle.propTypes = {
  currentUser: PropTypes.string,
  setCurrentUser: PropTypes.func,
};

export default UserToggle;
